import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/hjujcunus.css';
import '../../css/u/umylw3b7l.css';
import '../../css/y/y7q2lbcuk.css';
import '../../css/a/auso9g4xh.css';
import '../../css/p/pzornbbvo.css';
import '../../css/b/be9i2m4ok.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="hjujcunus wm-shadow"/><path class="umylw3b7l"/><path class="y7q2lbcuk"/><path class="auso9g4xh"/><path class="pzornbbvo"/><path class="be9i2m4ok wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:boxes"} {...others} />);
}

export default Component;
