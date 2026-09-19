import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/o/on3qdybdj.css';
import '../../css/d/dcnuadlyf.css';
import '../../css/w/wd330kbcy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="on3qdybdj"/><path class="dcnuadlyf"/><path class="wd330kbcy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:file-check-light"} {...others} />);
}

export default Component;
