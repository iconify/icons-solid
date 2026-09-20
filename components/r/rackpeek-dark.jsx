import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r6msedb6h.css';
import '../../css/n/nj4qa7bla.css';
import '../../css/x/xorxv8l3z.css';
import '../../css/r/ro6dfbb8k.css';
import '../../css/r/r2i9-3b3d.css';
import '../../css/u/uu6b220vb.css';
import '../../css/x/xsz2__blu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r6msedb6h"/><path class="nj4qa7bla"/><path class="xorxv8l3z"/><path class="ro6dfbb8k"/><path class="r2i9-3b3d"/><path class="uu6b220vb"/><path class="xsz2__blu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rackpeek-dark"} {...others} />);
}

export default Component;
