import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/or1hscrph.css';
import '../../css/v/v9vypobbh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="or1hscrph"/><path class="v9vypobbh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:foldable-vertical-half"} {...others} />);
}

export default Component;
