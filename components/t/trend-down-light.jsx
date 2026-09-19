import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/umch1hbbu.css';
import '../../css/f/f5y0d7xbc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="umch1hbbu"/><path class="f5y0d7xbc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:trend-down-light"} {...others} />);
}

export default Component;
