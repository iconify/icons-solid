import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kwh3lrbby.css';

const viewBox = {"width":432,"height":432};
const content = `<path class="kwh3lrbby"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:dot-circle-alt"} {...others} />);
}

export default Component;
