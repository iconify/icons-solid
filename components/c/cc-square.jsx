import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umcqggbeq.css';
import '../../css/n/n1lsf0bnc.css';

const viewBox = {"width":16,"height":16};
const content = `<defs><path id="SVGZzR9RbFh" class="umcqggbeq"/></defs><g class="n1lsf0bnc"><use href="#SVGZzR9RbFh"/><use href="#SVGZzR9RbFh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:cc-square"} {...others} />);
}

export default Component;
