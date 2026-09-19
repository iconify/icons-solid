import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v1suj6g3j.css';

const viewBox = {"width":256,"height":384};
const content = `<path class="v1suj6g3j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:long-arrow-down"} {...others} />);
}

export default Component;
