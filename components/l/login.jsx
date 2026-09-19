import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ogss53eaa.css';
import '../../css/q/qit74nb_r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ogss53eaa"/><path class="qit74nb_r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:login"} {...others} />);
}

export default Component;
