import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ovky5ebwk.css';
import '../../css/e/e0581abux.css';
import '../../css/v/vkg-d9byn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ovky5ebwk"/><path class="e0581abux"/><path class="vkg-d9byn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:shrink-20-bold"} {...others} />);
}

export default Component;
