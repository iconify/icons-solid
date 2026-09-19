import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r3kb4cgpl.css';
import '../../css/o/on3qdybdj.css';
import '../../css/d/dcnuadlyf.css';
import '../../css/f/f024e6btn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="r3kb4cgpl"><path class="on3qdybdj"/><path class="dcnuadlyf"/><path class="f024e6btn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:file-document-bold"} {...others} />);
}

export default Component;
