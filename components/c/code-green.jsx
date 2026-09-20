import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jqnggccsm.css';
import '../../css/x/x0ujg73is.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jqnggccsm"/><path class="x0ujg73is"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteocons:code-green"} {...others} />);
}

export default Component;
