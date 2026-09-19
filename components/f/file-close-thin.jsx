import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/o/on3qdybdj.css';
import '../../css/d/dcnuadlyf.css';
import '../../css/y/ygbp9l3zb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="on3qdybdj"/><path class="dcnuadlyf"/><path class="ygbp9l3zb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:file-close-thin"} {...others} />);
}

export default Component;
