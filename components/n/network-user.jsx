import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fnd42w77c.css';
import '../../css/x/xhzrkf8kt.css';
import '../../css/i/ihjqf9bve.css';
import '../../css/d/dqe2afbuk.css';
import '../../css/m/mj7tlnbxu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fnd42w77c"/><path class="xhzrkf8kt"/><path class="ihjqf9bve"/><path class="dqe2afbuk"/><path class="mj7tlnbxu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:network-user"} {...others} />);
}

export default Component;
