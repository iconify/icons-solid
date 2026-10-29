import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zjpkx0bhs.css';
import '../../css/f/fh4wf_0gy.css';
import '../../css/r/r4u87jbxf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow zjpkx0bhs"/><path class="fh4wf_0gy wm-k"/><path class="r4u87jbxf wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:chevron-left"} {...others} />);
}

export default Component;
