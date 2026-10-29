import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/h0cjc2oci.css';
import '../../css/q/qaic4dakn.css';
import '../../css/g/gf6q-rxoe.css';
import '../../css/a/at7jlpcci.css';
import '../../css/y/yz4665bbg.css';
import '../../css/j/joty_yrzs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="h0cjc2oci wm-shadow"/><path class="qaic4dakn"/><path class="gf6q-rxoe"/><path class="at7jlpcci"/><path class="wm-shine yz4665bbg"/><path class="joty_yrzs wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:sort-alpha"} {...others} />);
}

export default Component;
