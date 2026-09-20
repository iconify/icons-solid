import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kyedt2luf.css';
import '../../css/j/jg724c96t.css';
import '../../css/y/y6is02bst.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="kyedt2luf"/><path class="jg724c96t"/><path class="y6is02bst"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:padlock-square-1"} {...others} />);
}

export default Component;
