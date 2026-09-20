import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/j5r9_tb_l.css';
import '../../css/g/gg_i4jb1f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="j5r9_tb_l"/><path class="gg_i4jb1f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:call-remove"} {...others} />);
}

export default Component;
