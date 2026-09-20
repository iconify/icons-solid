import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j43ytubal.css';
import '../../css/z/zzs5uk6nm.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="j43ytubal"/><path clip-rule="evenodd" class="zzs5uk6nm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:open-recent-16"} {...others} />);
}

export default Component;
