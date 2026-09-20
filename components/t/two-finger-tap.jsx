import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c-7vzab-u.css';
import '../../css/l/ln18bmvuh.css';
import '../../css/w/w317sk7ve.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="c-7vzab-u"/><path class="ln18bmvuh"/><path class="w317sk7ve"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:two-finger-tap"} {...others} />);
}

export default Component;
