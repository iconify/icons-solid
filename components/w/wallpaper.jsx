import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e8_gg4bxv.css';
import '../../css/w/wa7uyac8k.css';
import '../../css/t/t7gs68bst.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e8_gg4bxv"/><path class="wa7uyac8k"/><path class="t7gs68bst"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:wallpaper"} {...others} />);
}

export default Component;
