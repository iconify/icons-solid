import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/o/oa480xoob.css';
import '../../css/z/zc7cvea1c.css';
import '../../css/t/t-4ankb3t.css';
import '../../css/o/obvc3ve7q.css';
import '../../css/k/k7zassbqs.css';
import '../../css/x/xa5pkknmk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="oa480xoob wm-shadow"/><path class="zc7cvea1c"/><path class="t-4ankb3t"/><path class="obvc3ve7q"/><path class="k7zassbqs wm-shine"/><path class="wm-deco xa5pkknmk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:chef-hat"} {...others} />);
}

export default Component;
