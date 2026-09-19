import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ln-j0jbal.css';

const viewBox = {"width":448,"height":384};
const content = `<path class="ln-j0jbal"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:time-restore-setting"} {...others} />);
}

export default Component;
