import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ykhg1_noq.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="ykhg1_noq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-alert-radio-active-1-danger-nuke-radiation-nuclear-warning-alert-radioactive-caution"} {...others} />);
}

export default Component;
