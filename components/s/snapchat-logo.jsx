import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qo5xwrh4m.css';
import '../../css/l/l-gr6rf7s.css';
import '../../css/l/lxfdzybbe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qo5xwrh4m"/><path class="l-gr6rf7s"/><path class="lxfdzybbe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:snapchat-logo"} {...others} />);
}

export default Component;
