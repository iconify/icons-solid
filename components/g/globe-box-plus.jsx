import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x4e2-rves.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x4e2-rves"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:globe-box-plus"} {...others} />);
}

export default Component;
