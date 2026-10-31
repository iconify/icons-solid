import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/c-rfm8swt.css';
import '../../css/j/jhvx0lqij.css';
import '../../css/o/odu1j3rcb.css';

const viewBox = {"width":100,"height":100};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="c-rfm8swt"/><path class="jhvx0lqij"/><path class="odu1j3rcb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-memes:thug-life-hand-drawn"} {...others} />);
}

export default Component;
