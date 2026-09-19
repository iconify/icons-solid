import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fjr0c7bie.css';
import '../../css/m/md286fbip.css';
import '../../css/t/td3thuy1e.css';
import '../../css/t/t9ubb0kvl.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="fjr0c7bie"/><g class="md286fbip"><path class="td3thuy1e"/><path class="t9ubb0kvl"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:ht"} {...others} />);
}

export default Component;
