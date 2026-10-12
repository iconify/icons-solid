import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tkd3vobmk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tkd3vobmk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:full-width-fill-20"} {...others} />);
}

export default Component;
