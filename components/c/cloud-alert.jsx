import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qnmo8x8sj.css';
import '../../css/q/qz74shhnc.css';
import '../../css/d/dx7yjir4i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="qnmo8x8sj"/><path class="qz74shhnc"/><path class="dx7yjir4i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:cloud-alert"} {...others} />);
}

export default Component;
