import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vbxbaodhg.css';
import '../../css/r/rx9uik1il.css';
import '../../css/q/qw58u_bpj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="vbxbaodhg"><circle class="rx9uik1il"/><path class="qw58u_bpj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:alarmclock-duotone-line"} {...others} />);
}

export default Component;
