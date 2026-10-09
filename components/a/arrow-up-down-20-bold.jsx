import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9vddv0no.css';
import '../../css/c/c919zyb1p.css';
import '../../css/d/dnisdto1x.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="y9vddv0no"/><path class="c919zyb1p"/><path class="dnisdto1x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-up-down-20-bold"} {...others} />);
}

export default Component;
