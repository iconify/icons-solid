import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qb5-6h9_c.css';
import '../../css/o/or5i1hbnx.css';
import '../../css/u/uopp_bbmh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="qb5-6h9_c"/><path class="or5i1hbnx"/><path class="uopp_bbmh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:ribbon"} {...others} />);
}

export default Component;
