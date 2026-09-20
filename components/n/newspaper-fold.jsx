import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/r_7fsm3ms.css';
import '../../css/v/ve9s00b9i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="r_7fsm3ms"/><path class="ve9s00b9i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:newspaper-fold"} {...others} />);
}

export default Component;
