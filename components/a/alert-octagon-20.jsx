import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mrdv28bdf.css';
import '../../css/v/vceel18zg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mrdv28bdf"/><path class="vceel18zg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:alert-octagon-20"} {...others} />);
}

export default Component;
