import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sd0mwet8a.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="sd0mwet8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:cloud-upload-compact"} {...others} />);
}

export default Component;
