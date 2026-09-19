import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wz_fdacbr.css';
import '../../css/j/jj9znifff.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="wz_fdacbr"/><path class="jj9znifff"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:in-progress-warning"} {...others} />);
}

export default Component;
