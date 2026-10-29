import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mqpou98jf.css';
import '../../css/q/qr4ochb5c.css';
import '../../css/s/shi8u7lan.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="mqpou98jf"/><path class="qr4ochb5c wm-s"/><path class="shi8u7lan"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cloud-off-duo"} {...others} />);
}

export default Component;
