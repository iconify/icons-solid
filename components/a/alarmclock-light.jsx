import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/c/c075gebtz.css';
import '../../css/q/qw58u_bpj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><circle class="c075gebtz"/><path class="qw58u_bpj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:alarmclock-light"} {...others} />);
}

export default Component;
