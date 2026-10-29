import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/virje-byd.css';
import '../../css/e/ekpjv0bpv.css';
import '../../css/q/qnf560gll.css';
import '../../css/f/fyuyard5d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="virje-byd"/><path class="ekpjv0bpv"/><path class="qnf560gll"/><path class="fyuyard5d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:avatar-woman-hijab"} {...others} />);
}

export default Component;
