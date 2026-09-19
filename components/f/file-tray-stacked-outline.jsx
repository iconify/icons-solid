import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mud3cttoi.css';
import '../../css/s/szy9kghqd.css';
import '../../css/f/favr_3e4j.css';
import '../../css/h/hfjw3s3ul.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mud3cttoi"/><path class="szy9kghqd"/><path class="favr_3e4j"/><path class="hfjw3s3ul"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:file-tray-stacked-outline"} {...others} />);
}

export default Component;
