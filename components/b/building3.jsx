import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/uicrbeb8l.css';
import '../../css/u/uf1-fbdbb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="uicrbeb8l"/><path class="uf1-fbdbb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:building3"} {...others} />);
}

export default Component;
