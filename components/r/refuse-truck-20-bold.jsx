import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fvrtv7bqi.css';
import '../../css/p/pazdl73hk.css';
import '../../css/p/p7nvdbbgt.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fvrtv7bqi"/><path class="pazdl73hk"/><path class="p7nvdbbgt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:refuse-truck-20-bold"} {...others} />);
}

export default Component;
