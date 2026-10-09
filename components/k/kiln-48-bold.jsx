import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dh0kzqbxb.css';
import '../../css/i/ihmii9b0s.css';
import '../../css/y/yaza77bwx.css';
import '../../css/f/fuym42k5o.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dh0kzqbxb"/><path class="ihmii9b0s"/><path class="yaza77bwx"/><path class="fuym42k5o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:kiln-48-bold"} {...others} />);
}

export default Component;
