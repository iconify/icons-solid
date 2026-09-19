import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zfwjbh19v.css';
import '../../css/f/fvc9flxcj.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="zfwjbh19v"/><path class="fvc9flxcj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:cloud-download"} {...others} />);
}

export default Component;
