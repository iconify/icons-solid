import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xg-os2b_i.css';
import '../../css/z/zyzgsactv.css';
import '../../css/c/c_vkhxzzc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xg-os2b_i"/><path class="zyzgsactv"/><path class="c_vkhxzzc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:paste-20"} {...others} />);
}

export default Component;
