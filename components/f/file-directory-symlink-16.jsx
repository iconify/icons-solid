import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vdcn49b2p.css';
import '../../css/z/ze_2m6b8h.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="vdcn49b2p"/><path class="ze_2m6b8h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:file-directory-symlink-16"} {...others} />);
}

export default Component;
