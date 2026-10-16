import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ozbstuboh.css';
import '../../css/u/u3e4gfbli.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ozbstuboh"/><path class="u3e4gfbli"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:phone-missed-20-bold"} {...others} />);
}

export default Component;
