import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/svdy80z7e.css';
import '../../css/z/zd_-azbqb.css';
import '../../css/e/e39ud6bwf.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="svdy80z7e"/><path class="zd_-azbqb"/><circle class="e39ud6bwf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:navaid-military"} {...others} />);
}

export default Component;
