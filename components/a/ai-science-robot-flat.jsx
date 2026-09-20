import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f_sydkbcn.css';
import '../../css/d/dakfutypm.css';
import '../../css/l/lgvv1_8no.css';
import '../../css/y/yhzvq64ru.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="f_sydkbcn"/><path clip-rule="evenodd" class="dakfutypm"/><path clip-rule="evenodd" class="lgvv1_8no"/><path clip-rule="evenodd" class="yhzvq64ru"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:ai-science-robot-flat"} {...others} />);
}

export default Component;
