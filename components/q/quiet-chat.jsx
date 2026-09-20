import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r60ej9bjx.css';
import '../../css/f/f91k7jbaj.css';
import '../../css/x/xs2wbd9sc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r60ej9bjx"/><path class="f91k7jbaj"/><path class="xs2wbd9sc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:quiet-chat"} {...others} />);
}

export default Component;
