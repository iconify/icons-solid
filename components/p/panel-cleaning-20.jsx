import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9p4n1_lf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="y9p4n1_lf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:panel-cleaning-20"} {...others} />);
}

export default Component;
