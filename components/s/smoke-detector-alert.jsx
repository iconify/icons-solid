import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tstl_rxkr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tstl_rxkr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:smoke-detector-alert"} {...others} />);
}

export default Component;
