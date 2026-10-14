import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/k/kdhpsubmy.css';
import '../../css/r/rsjn8er-c.css';
import '../../css/y/yunzxcoqo.css';
import '../../css/t/tfgcibbro.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="kdhpsubmy"/><path class="rsjn8er-c"/><path class="yunzxcoqo"/><path class="tfgcibbro"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:table"} {...others} />);
}

export default Component;
