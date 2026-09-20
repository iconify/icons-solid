import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv-n-8s8g.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="nv-n-8s8g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:digital-totem"} {...others} />);
}

export default Component;
