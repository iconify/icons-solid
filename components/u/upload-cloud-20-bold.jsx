import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t3ezex0cb.css';
import '../../css/h/hldpdtbpd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="t3ezex0cb"/><path class="hldpdtbpd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:upload-cloud-20-bold"} {...others} />);
}

export default Component;
