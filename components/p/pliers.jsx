import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xrcqwe5gk.css';
import '../../css/o/ovdhb7bzz.css';
import '../../css/w/w4hap8bee.css';
import '../../css/s/sgt4c0i2j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="xrcqwe5gk"/><path class="ovdhb7bzz"/><path class="w4hap8bee"/><path class="sgt4c0i2j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:pliers"} {...others} />);
}

export default Component;
