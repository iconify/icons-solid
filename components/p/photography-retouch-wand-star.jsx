import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vq3kdq88n.css';
import '../../css/u/u9_e86k9a.css';
import '../../css/w/wvx4owb7n.css';
import '../../css/z/z2_t2m5aa.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="vq3kdq88n"/><path class="u9_e86k9a"/><path class="wvx4owb7n"/><path class="z2_t2m5aa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:photography-retouch-wand-star"} {...others} />);
}

export default Component;
