import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/om0ublbct.css';
import '../../css/p/pg2d1vf0f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="om0ublbct"/><path class="pg2d1vf0f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:l-arrow-up-right"} {...others} />);
}

export default Component;
