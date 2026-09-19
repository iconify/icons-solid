import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kccx5mbrd.css';
import '../../css/c/cigvp3btk.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="kccx5mbrd"/><path class="cigvp3btk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:gas-station-filled"} {...others} />);
}

export default Component;
