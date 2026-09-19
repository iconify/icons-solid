import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cjoy21biv.css';
import '../../css/m/m97g7ra3o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cjoy21biv duoicon-secondary-layer"/><path class="duoicon-primary-layer m97g7ra3o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:chart-pie"} {...others} />);
}

export default Component;
