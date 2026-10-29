import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/f/f7sohgbqm.css';
import '../../css/z/z4uy344vo.css';
import '../../css/t/tvafuqbta.css';
import '../../css/t/tfj9tmbgt.css';
import '../../css/y/yfmwx7fzu.css';
import '../../css/s/sjgcrcdjv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="f7sohgbqm wm-shadow"/><path class="z4uy344vo"/><path class="tvafuqbta"/><path class="tfj9tmbgt"/><path class="wm-shine yfmwx7fzu"/><path class="sjgcrcdjv wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:circle-dashed"} {...others} />);
}

export default Component;
