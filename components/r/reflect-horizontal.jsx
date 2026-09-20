import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/emed2bbtx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="emed2bbtx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:reflect-horizontal"} {...others} />);
}

export default Component;
