import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oa2vsbctw.css';

const viewBox = {"width":472,"height":464};
const content = `<path class="oa2vsbctw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:input-antenna"} {...others} />);
}

export default Component;
