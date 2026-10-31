import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xytt3obod.css';
import '../../css/j/j10uc_vjr.css';
import '../../css/v/v4wa-kb6k.css';
import '../../css/d/dbvk5x3la.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="xytt3obod"/><path class="j10uc_vjr"/><path class="v4wa-kb6k"/><path class="dbvk5x3la"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:senegal"} {...others} />);
}

export default Component;
