import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ec1mt9fwb.css';
import '../../css/h/h2sed2fvb.css';
import '../../css/n/nt1eozdqf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ec1mt9fwb"/><path class="h2sed2fvb"/><path class="nt1eozdqf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:file-badge-24"} {...others} />);
}

export default Component;
