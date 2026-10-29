import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b5dqg8itc.css';
import '../../css/c/caam7zbpo.css';
import '../../css/r/rxph36bxz.css';
import '../../css/q/qk9xa2v5m.css';
import '../../css/q/qu1k8b4di.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="b5dqg8itc"/><path class="caam7zbpo"/><path class="rxph36bxz"/><path class="qk9xa2v5m"/><path class="qu1k8b4di"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:avatar-man-afro"} {...others} />);
}

export default Component;
