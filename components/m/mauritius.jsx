import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mb9b0qbvi.css';
import '../../css/v/vv-rc2b1z.css';
import '../../css/d/desiwpbvm.css';
import '../../css/r/r130d-bgs.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="mb9b0qbvi"/><path class="vv-rc2b1z"/><path class="desiwpbvm"/><path class="r130d-bgs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:mauritius"} {...others} />);
}

export default Component;
