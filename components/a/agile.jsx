import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/odm-21boh.css';
import '../../css/n/n6i2qcb0p.css';
import '../../css/u/uxgpy7ntg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="odm-21boh"/><path class="n6i2qcb0p"/><path class="uxgpy7ntg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:agile"} {...others} />);
}

export default Component;
