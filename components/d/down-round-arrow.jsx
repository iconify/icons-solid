import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/ozipg7bdf.css';
import '../../css/m/m8qo923lb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ozipg7bdf"/><path class="m8qo923lb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:down-round-arrow"} {...others} />);
}

export default Component;
