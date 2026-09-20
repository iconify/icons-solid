import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l_hap2nuf.css';
import '../../css/e/ee_cdkb8m.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="l_hap2nuf"/><path clip-rule="evenodd" class="ee_cdkb8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:run-debug-16"} {...others} />);
}

export default Component;
