import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/myx735bdk.css';
import '../../css/g/gfw7ev9fg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="myx735bdk"/><path class="gfw7ev9fg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:caliper-20"} {...others} />);
}

export default Component;
