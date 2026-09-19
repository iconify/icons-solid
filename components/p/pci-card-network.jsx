import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c77bytqov.css';
import '../../css/b/bvn-2db2g.css';
import '../../css/d/dvlkv87yt.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="c77bytqov"/><path class="bvn-2db2g"/><path class="dvlkv87yt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:pci-card-network"} {...others} />);
}

export default Component;
