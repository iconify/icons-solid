import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gt6n36bom.css';
import '../../css/i/i5jbbacbv.css';
import '../../css/e/egl9w0p1j.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gt6n36bom"/><path class="i5jbbacbv"/><path class="egl9w0p1j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:price-up-20-bold"} {...others} />);
}

export default Component;
