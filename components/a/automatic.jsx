import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y6m34_-qc.css';
import '../../css/h/h-3i78bcq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="y6m34_-qc"/><path class="h-3i78bcq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:automatic"} {...others} />);
}

export default Component;
