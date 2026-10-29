import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x0_gp6ebt.css';
import '../../css/e/ev0kbl_bk.css';
import '../../css/n/njg9n7b3j.css';
import '../../css/t/turwf4bpk.css';
import '../../css/u/um-r30qfi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-a x0_gp6ebt"/><path class="ev0kbl_bk wm-k"/><path class="njg9n7b3j wm-a"/><path class="turwf4bpk wm-a"/><path class="um-r30qfi wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:router"} {...others} />);
}

export default Component;
