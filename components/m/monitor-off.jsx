import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/g3cuk7bic.css';
import '../../css/v/vxuqhab0r.css';
import '../../css/q/qr4ochb5c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="g3cuk7bic"/><path class="vxuqhab0r wm-a"/><path class="qr4ochb5c wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:monitor-off"} {...others} />);
}

export default Component;
