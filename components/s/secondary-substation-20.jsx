import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w3evabc0f.css';
import '../../css/e/eojyj2bbi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="w3evabc0f"/><path class="eojyj2bbi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:secondary-substation-20"} {...others} />);
}

export default Component;
