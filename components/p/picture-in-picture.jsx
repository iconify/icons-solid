import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gpj_gzx8a.css';

const viewBox = {"width":472,"height":384};
const content = `<path class="gpj_gzx8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:picture-in-picture"} {...others} />);
}

export default Component;
