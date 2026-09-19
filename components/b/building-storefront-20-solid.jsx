import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvycimbwd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rvycimbwd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:building-storefront-20-solid"} {...others} />);
}

export default Component;
