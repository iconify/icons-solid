import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ol_y8tkuq.css';
import '../../css/e/eorjg-5_x.css';
import '../../css/e/ectew4bwb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ol_y8tkuq wm-shadow"/><path class="eorjg-5_x wm-k"/><path class="ectew4bwb wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:list-filter"} {...others} />);
}

export default Component;
