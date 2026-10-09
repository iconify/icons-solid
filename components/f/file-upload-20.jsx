import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-g74icta.css';
import '../../css/p/pizowmb7j.css';
import '../../css/a/axq39ihgk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="d-g74icta"/><path class="pizowmb7j"/><path class="axq39ihgk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:file-upload-20"} {...others} />);
}

export default Component;
