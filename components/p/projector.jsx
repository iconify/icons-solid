import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/e06he2csl.css';
import '../../css/y/yrxkn9bpd.css';
import '../../css/k/kwaf2c8nv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="e06he2csl"/><path class="yrxkn9bpd"/><path class="kwaf2c8nv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:projector"} {...others} />);
}

export default Component;
