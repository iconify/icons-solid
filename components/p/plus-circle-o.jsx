import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sh4_mkb5m.css';

const viewBox = {"width":432,"height":432};
const content = `<path class="sh4_mkb5m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:plus-circle-o"} {...others} />);
}

export default Component;
