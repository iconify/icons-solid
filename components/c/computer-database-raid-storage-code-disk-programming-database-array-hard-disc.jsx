import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/a0imeugpr.css';
import '../../css/b/b2k2a-inc.css';
import '../../css/p/p9vr9ac7s.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><ellipse class="a0imeugpr"/><path class="b2k2a-inc"/><path class="p9vr9ac7s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:computer-database-raid-storage-code-disk-programming-database-array-hard-disc"} {...others} />);
}

export default Component;
