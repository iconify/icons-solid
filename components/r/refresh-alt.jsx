import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vap8vfq9f.css';

const viewBox = {"width":472,"height":384};
const content = `<path class="vap8vfq9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:refresh-alt"} {...others} />);
}

export default Component;
