import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h7rwn8boc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h7rwn8boc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:caret-up-circle"} {...others} />);
}

export default Component;
