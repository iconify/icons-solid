import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qjx8d1knt.css';
import '../../css/q/qqloxac7x.css';
import '../../css/t/th2yn--nv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qjx8d1knt"/><path class="qqloxac7x"/><path class="th2yn--nv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:desktop-monitor-smiley"} {...others} />);
}

export default Component;
