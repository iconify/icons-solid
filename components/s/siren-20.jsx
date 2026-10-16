import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bn_rhpmlt.css';
import '../../css/i/inx0u8fpo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bn_rhpmlt"/><path class="inx0u8fpo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:siren-20"} {...others} />);
}

export default Component;
