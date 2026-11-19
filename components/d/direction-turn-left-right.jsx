import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qiivxj9lp.css';
import '../../css/w/woqg2xb0b.css';
import '../../css/u/uuop1pb4g.css';
import '../../css/v/vhdrq4p5a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qiivxj9lp"/><path class="woqg2xb0b"/><path class="uuop1pb4g"/><path class="vhdrq4p5a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:direction-turn-left-right"} {...others} />);
}

export default Component;
