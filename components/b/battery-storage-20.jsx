import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/desah0vvm.css';
import '../../css/c/cgrkdxbek.css';
import '../../css/u/ux6-tjbzi.css';
import '../../css/c/cmhivobyv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="desah0vvm"/><path class="cgrkdxbek"/><path class="ux6-tjbzi"/><path class="cmhivobyv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-storage-20"} {...others} />);
}

export default Component;
