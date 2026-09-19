import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xr5ki4baj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xr5ki4baj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:light-bulb-20-solid"} {...others} />);
}

export default Component;
