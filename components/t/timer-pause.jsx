import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hoqg9vbdg.css';
import '../../css/k/ke7d84ibd.css';
import '../../css/w/wq2wc4bco.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hoqg9vbdg"/><path class="ke7d84ibd"/><path class="wq2wc4bco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:timer-pause"} {...others} />);
}

export default Component;
