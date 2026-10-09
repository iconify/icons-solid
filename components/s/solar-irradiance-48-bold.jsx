import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ihnl7ab7i.css';
import '../../css/k/k8yin4bou.css';
import '../../css/g/gfbmiabsc.css';
import '../../css/w/wvft85b8f.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ihnl7ab7i"/><path class="k8yin4bou"/><path class="gfbmiabsc"/><path class="wvft85b8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-irradiance-48-bold"} {...others} />);
}

export default Component;
