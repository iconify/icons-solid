import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/j/jshh2ec2f.css';
import '../../css/g/g_cnmgbyh.css';
import '../../css/z/z50j8nbdt.css';
import '../../css/o/ov6hnac8z.css';
import '../../css/y/yv3ktebti.css';
import '../../css/x/xa5pkknmk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="jshh2ec2f wm-shadow"/><path class="g_cnmgbyh"/><path class="z50j8nbdt"/><path class="ov6hnac8z"/><path class="wm-shine yv3ktebti"/><path class="wm-deco xa5pkknmk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:chevron-left"} {...others} />);
}

export default Component;
