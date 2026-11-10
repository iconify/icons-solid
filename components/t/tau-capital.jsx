import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/o/otm00ebgy.css';
import '../../css/r/rih-h6bmi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="otm00ebgy"/><path class="rih-h6bmi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:tau-capital"} {...others} />);
}

export default Component;
