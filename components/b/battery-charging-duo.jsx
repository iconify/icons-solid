import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r92msobqe.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/ktq1g1b0a.css';
import '../../css/a/ajv3mbcxk.css';
import '../../css/n/n73f4kb6j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r92msobqe secondary"/><g class="dt0cm9dhy primary"><path class="ktq1g1b0a"/><path class="ajv3mbcxk"/><path class="n73f4kb6j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:battery-charging-duo"} {...others} />);
}

export default Component;
