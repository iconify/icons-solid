import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pvl6bvbyg.css';
import '../../css/u/uu4o2hbdh.css';
import '../../css/a/aty_qzhdh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pvl6bvbyg"/><path class="uu4o2hbdh"/><path class="aty_qzhdh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:wallet5"} {...others} />);
}

export default Component;
