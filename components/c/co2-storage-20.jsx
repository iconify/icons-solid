import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xok_3nz5k.css';
import '../../css/t/t2sid5ean.css';
import '../../css/k/k40br8m-h.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xok_3nz5k"/><path class="t2sid5ean"/><path class="k40br8m-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:co2-storage-20"} {...others} />);
}

export default Component;
