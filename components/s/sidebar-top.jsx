import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/m7c3bty8u.css';
import '../../css/b/bh537rbgy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="m7c3bty8u"/><path class="bh537rbgy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:sidebar-top"} {...others} />);
}

export default Component;
