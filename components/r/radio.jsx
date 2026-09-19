import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/ha1-zac3l.css';
import '../../css/d/d_11-9bwc.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ha1-zac3l"/><path class="d_11-9bwc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:radio"} {...others} />);
}

export default Component;
