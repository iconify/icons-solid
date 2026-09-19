import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bbp8jrcad.css';
import '../../css/f/faa_66b6l.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="bbp8jrcad"/><path class="faa_66b6l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:fair"} {...others} />);
}

export default Component;
