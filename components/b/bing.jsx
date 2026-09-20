import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jyp0zek2m.css';
import '../../css/e/eicf32biw.css';
import '../../css/h/hjuyob91s.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jyp0zek2m"/><path class="eicf32biw"/><path class="hjuyob91s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:bing"} {...others} />);
}

export default Component;
