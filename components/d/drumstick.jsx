import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/s/sdy54db7p.css';
import '../../css/q/qfmqnvqfk.css';
import '../../css/c/cq3uc6zfy.css';
import '../../css/o/op2ygjb8h.css';
import '../../css/t/t1kb9-exm.css';
import '../../css/v/vz8x7mdhj.css';
import '../../css/q/qxa552b8g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="sdy54db7p wm-shadow"/><path class="qfmqnvqfk"/><path class="cq3uc6zfy"/><path class="op2ygjb8h"/><path class="t1kb9-exm"/><path class="vz8x7mdhj wm-shine"/><path class="qxa552b8g wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:drumstick"} {...others} />);
}

export default Component;
