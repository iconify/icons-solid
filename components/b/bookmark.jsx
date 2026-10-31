import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/o5whxw56e.css';
import '../../css/g/gtrpi3buf.css';
import '../../css/o/omo-3-b4v.css';
import '../../css/v/v5j4mq2rx.css';
import '../../css/w/wsljmtr8g.css';
import '../../css/o/ovxyk6smt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="o5whxw56e wm-shadow"/><path class="gtrpi3buf"/><path class="omo-3-b4v"/><path class="v5j4mq2rx"/><path class="wsljmtr8g"/><path class="ovxyk6smt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:bookmark"} {...others} />);
}

export default Component;
