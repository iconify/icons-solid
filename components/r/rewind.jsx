import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/b/b0hz3rbqu.css';
import '../../css/j/jdzsuacbo.css';
import '../../css/p/p0kxa4bfp.css';
import '../../css/t/tkxcbvy3y.css';
import '../../css/p/pgil77bba.css';
import '../../css/z/zyw_44vkt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="b0hz3rbqu wm-shadow"/><path class="jdzsuacbo"/><path class="p0kxa4bfp"/><path class="tkxcbvy3y"/><path class="pgil77bba wm-shine"/><path class="wm-deco zyw_44vkt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:rewind"} {...others} />);
}

export default Component;
