import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pgsbftbew.css';
import '../../css/q/q3_x03l7v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pgsbftbew"/><path class="q3_x03l7v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:box-3d-check"} {...others} />);
}

export default Component;
