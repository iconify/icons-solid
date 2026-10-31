import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iyvag8bvb.css';
import '../../css/m/m5i6atqoz.css';
import '../../css/k/ks71f2jij.css';
import '../../css/a/a71cc-bwc.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="iyvag8bvb"/><path class="m5i6atqoz"/><path class="ks71f2jij"/><path class="a71cc-bwc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:moldova"} {...others} />);
}

export default Component;
