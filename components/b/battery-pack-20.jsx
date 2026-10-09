import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cco71z33o.css';
import '../../css/i/izilerpqu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="cco71z33o"/><path class="izilerpqu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-pack-20"} {...others} />);
}

export default Component;
