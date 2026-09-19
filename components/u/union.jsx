import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/c4osj4jkn.css';
import '../../css/h/hqx1s-dqz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="c4osj4jkn"/><path class="hqx1s-dqz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:union"} {...others} />);
}

export default Component;
