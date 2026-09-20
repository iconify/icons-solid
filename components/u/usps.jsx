import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/um-dnup2r.css';
import '../../css/e/e-8ncuhex.css';
import '../../css/x/xcpyko0hf.css';
import '../../css/k/kqff81_xc.css';

const viewBox = {"width":76.3,"height":47.2};
const content = `<g class="cuyn6tgcc"><path class="um-dnup2r"/><path class="e-8ncuhex"/><path class="xcpyko0hf"/><path class="kqff81_xc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:usps"} {...others} />);
}

export default Component;
