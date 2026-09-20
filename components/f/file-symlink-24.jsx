import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m3r5-6bff.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m3r5-6bff"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:file-symlink-24"} {...others} />);
}

export default Component;
