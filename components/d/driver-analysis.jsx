import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/ml-w7dbdb.css';
import '../../css/i/icpdw850u.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="ml-w7dbdb"/><path class="icpdw850u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:driver-analysis"} {...others} />);
}

export default Component;
