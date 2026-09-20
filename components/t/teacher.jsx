import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gkwj9qb6t.css';
import '../../css/z/zt9l8boyv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gkwj9qb6t"/><path class="zt9l8boyv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:teacher"} {...others} />);
}

export default Component;
