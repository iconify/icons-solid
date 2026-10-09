import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sut7r2bvd.css';
import '../../css/o/oebaf-blw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="sut7r2bvd"/><path class="oebaf-blw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:energy-efficiency-20-bold"} {...others} />);
}

export default Component;
