import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aghwx5bsq.css';
import '../../css/t/tel8tmb8b.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="aghwx5bsq"/><path class="tel8tmb8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:link-20-bold"} {...others} />);
}

export default Component;
