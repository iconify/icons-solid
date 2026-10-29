import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/i6txspcqg.css';
import '../../css/z/zq5nnn5yu.css';
import '../../css/b/bewfq9f6h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="i6txspcqg"/><path class="zq5nnn5yu"/><path class="bewfq9f6h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:chess"} {...others} />);
}

export default Component;
