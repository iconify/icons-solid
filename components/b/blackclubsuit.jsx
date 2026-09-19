import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uohs_2boh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="uohs_2boh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:blackclubsuit"} {...others} />);
}

export default Component;
