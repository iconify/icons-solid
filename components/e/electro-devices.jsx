import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y6m34_-qc.css';
import '../../css/i/ifltctg4q.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="y6m34_-qc"/><path class="ifltctg4q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:electro-devices"} {...others} />);
}

export default Component;
