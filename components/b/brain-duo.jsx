import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c71a0vbho.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wjgs2jefc.css';
import '../../css/o/oxi-i2u-e.css';
import '../../css/w/wkrg20bhl.css';
import '../../css/s/st6milb8r.css';
import '../../css/h/h_t9xdbnh.css';
import '../../css/z/zn8884bhl.css';
import '../../css/o/o6dxw7-up.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c71a0vbho secondary"/><g class="dt0cm9dhy primary"><path class="wjgs2jefc"/><path class="oxi-i2u-e"/><path class="wkrg20bhl"/><path class="st6milb8r"/><path class="h_t9xdbnh"/><path class="zn8884bhl"/><path class="o6dxw7-up"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:brain-duo"} {...others} />);
}

export default Component;
