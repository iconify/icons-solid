import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/ymwib75zz.css';
import '../../css/b/bbtncsbqa.css';
import '../../css/b/bk_7a7mqc.css';
import '../../css/m/mu_vexjve.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ymwib75zz"/><path class="bbtncsbqa"/><path class="bk_7a7mqc"/><path class="mu_vexjve"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:avatar-penguin"} {...others} />);
}

export default Component;
