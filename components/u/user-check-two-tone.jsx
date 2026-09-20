import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cf7arub8r.css';
import '../../css/q/ql0ukp42n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cf7arub8r"/><path class="ql0ukp42n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:user-check-two-tone"} {...others} />);
}

export default Component;
