import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/leutjaccr.css';
import '../../css/k/kogtqeljo.css';
import '../../css/a/av7sw4bua.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="leutjaccr"/><path class="kogtqeljo"/><path class="av7sw4bua"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tea-cup-20"} {...others} />);
}

export default Component;
