import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cd9-tny0x.css';
import '../../css/n/ndt9adc_x.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="cd9-tny0x"/><path class="ndt9adc_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:sqlalchemy-wordmark"} {...others} />);
}

export default Component;
