import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xyft_clej.css';
import '../../css/j/j5257yb9v.css';
import '../../css/y/ydnb04iod.css';
import '../../css/y/ymie1nvqo.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="xyft_clej"/><circle class="j5257yb9v"/><path class="ydnb04iod"/><path class="ymie1nvqo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:temperature-fahrenheit"} {...others} />);
}

export default Component;
