import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wr6fn7b-l.css';

const viewBox = {"width":512,"height":384};
const content = `<path class="wr6fn7b-l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:cloud-download"} {...others} />);
}

export default Component;
