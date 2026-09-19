import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fero-5bec.css';
import '../../css/c/ci3wxgbkl.css';
import '../../css/i/i-v3-zb2d.css';
import '../../css/m/miprkwbjz.css';
import '../../css/s/s6xzyh3xx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fero-5bec"/><circle class="ci3wxgbkl"/><path class="i-v3-zb2d"/><path class="miprkwbjz"/><circle class="s6xzyh3xx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:private-connectivity"} {...others} />);
}

export default Component;
