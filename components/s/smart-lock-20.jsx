import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zzm-m8l7i.css';
import '../../css/u/u-hzwbc2y.css';
import '../../css/a/aiwlnno1v.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zzm-m8l7i"/><path class="u-hzwbc2y"/><path class="aiwlnno1v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:smart-lock-20"} {...others} />);
}

export default Component;
