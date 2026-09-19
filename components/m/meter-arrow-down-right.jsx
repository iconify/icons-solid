import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/h9bzm6bqd.css';
import '../../css/d/dlo6mubok.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="h9bzm6bqd"/><path class="dlo6mubok"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:meter-arrow-down-right"} {...others} />);
}

export default Component;
