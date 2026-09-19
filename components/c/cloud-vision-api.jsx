import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i7sr6ubzr.css';
import '../../css/d/da52qgv7e.css';
import '../../css/k/khjjc1bwg.css';
import '../../css/j/jv73pqbxn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i7sr6ubzr"/><path class="da52qgv7e"/><path class="khjjc1bwg"/><circle class="jv73pqbxn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:cloud-vision-api"} {...others} />);
}

export default Component;
