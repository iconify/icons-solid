import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wxkf8hbli.css';
import '../../css/b/b9wxn2bik.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wxkf8hbli"/><path class="b9wxn2bik"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:sim-card"} {...others} />);
}

export default Component;
