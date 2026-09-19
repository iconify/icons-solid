import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r3kb4cgpl.css';
import '../../css/o/on3qdybdj.css';
import '../../css/d/dcnuadlyf.css';
import '../../css/y/ygbp9l3zb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="r3kb4cgpl"><path class="on3qdybdj"/><path class="dcnuadlyf"/><path class="ygbp9l3zb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:file-close-bold"} {...others} />);
}

export default Component;
