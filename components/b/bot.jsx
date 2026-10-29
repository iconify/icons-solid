import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eszi89bko.css';
import '../../css/b/b0_841bxc.css';
import '../../css/o/opz0lf9mp.css';
import '../../css/v/v4c15acmv.css';
import '../../css/k/ke596_bka.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eszi89bko wm-a"/><path class="b0_841bxc wm-a"/><path class="opz0lf9mp wm-k"/><path class="v4c15acmv wm-a"/><path class="ke596_bka wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:bot"} {...others} />);
}

export default Component;
