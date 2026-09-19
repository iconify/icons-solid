import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uygsfbcsl.css';
import '../../css/z/z49u_mb1v.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="uygsfbcsl"/><path class="z49u_mb1v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:document-copy"} {...others} />);
}

export default Component;
