import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uv9yq260v.css';
import '../../css/s/ssgj37swb.css';
import '../../css/c/cy8jwyroj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uv9yq260v"/><path class="ssgj37swb"/><path class="cy8jwyroj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:diode-48"} {...others} />);
}

export default Component;
