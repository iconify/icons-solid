import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s5wjr301p.css';
import '../../css/v/vdun36bvu.css';
import '../../css/y/y9pibd9fz.css';
import '../../css/f/faxepgk3z.css';
import '../../css/q/qg1ro4btx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="s5wjr301p"/><path class="vdun36bvu"/><path class="y9pibd9fz"/><path class="faxepgk3z"/><path class="qg1ro4btx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:win-rar-bold"} {...others} />);
}

export default Component;
