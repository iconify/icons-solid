import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/upy-ybcph.css';
import '../../css/i/i1e923jjk.css';
import '../../css/z/z54ut_7zc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="upy-ybcph"/><path class="i1e923jjk"/><path class="z54ut_7zc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:download-48"} {...others} />);
}

export default Component;
