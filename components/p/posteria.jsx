import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ys8turbgx.css';
import '../../css/r/r5bfu2tfk.css';
import '../../css/e/e8ygrwbil.css';
import '../../css/q/q75jjebbk.css';
import '../../css/z/zz-ow3bzn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ys8turbgx"/><path class="r5bfu2tfk"/><path class="e8ygrwbil"/><circle class="q75jjebbk"/><path class="zz-ow3bzn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:posteria"} {...others} />);
}

export default Component;
