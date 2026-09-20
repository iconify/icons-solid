import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aktiaydcc.css';
import '../../css/c/c20n45bfn.css';
import '../../css/c/czv5jnbid.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="aktiaydcc"/><path class="c20n45bfn"/><path class="czv5jnbid"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:draw-io"} {...others} />);
}

export default Component;
