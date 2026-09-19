import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k43y_he5a.css';
import '../../css/q/qwvywhgtu.css';
import '../../css/v/vh1dgbcue.css';
import '../../css/y/yca0t4ank.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="k43y_he5a"/><path class="qwvywhgtu"/><circle class="vh1dgbcue"/><path class="yca0t4ank"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-cloud-dedicated-host"} {...others} />);
}

export default Component;
