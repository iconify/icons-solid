import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/il86k8d2z.css';
import '../../css/x/x9t2-ybif.css';
import '../../css/t/t3hgv-bmt.css';
import '../../css/r/rl86ssbkj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="il86k8d2z"/><path class="x9t2-ybif"/><path class="t3hgv-bmt"/><path clip-rule="evenodd" class="rl86ssbkj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bomb-emoji-outline"} {...others} />);
}

export default Component;
