import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aa7yxxbyz.css';
import '../../css/o/oa3dzxuun.css';
import '../../css/f/f-planbwl.css';
import '../../css/o/o3a8pcdop.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aa7yxxbyz wm-k"/><path class="oa3dzxuun wm-k"/><path class="f-planbwl wm-a"/><path class="o3a8pcdop wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:terminal"} {...others} />);
}

export default Component;
