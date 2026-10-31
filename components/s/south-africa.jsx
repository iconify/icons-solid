import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wf0et6bvn.css';
import '../../css/v/v9c9n62_b.css';
import '../../css/g/g7-s2nbhk.css';
import '../../css/l/l-z5vg59w.css';
import '../../css/s/s69kncvct.css';
import '../../css/a/a7ocenhtx.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="wf0et6bvn"/><path class="v9c9n62_b"/><path class="g7-s2nbhk"/><path class="l-z5vg59w"/><path class="s69kncvct"/><path class="a7ocenhtx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:south-africa"} {...others} />);
}

export default Component;
