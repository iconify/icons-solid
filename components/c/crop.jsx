import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/af7ay2b5x.css';
import '../../css/k/k49bc9bqz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="af7ay2b5x"/><path class="k49bc9bqz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:crop"} {...others} />);
}

export default Component;
