import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yllajgbtw.css';
import '../../css/z/zvjeae8vn.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="yllajgbtw"/><path clip-rule="evenodd" class="zvjeae8vn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:window-16"} {...others} />);
}

export default Component;
