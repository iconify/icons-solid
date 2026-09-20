import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/l/lgv3plbgc.css';
import '../../css/y/yf7lrqbiw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="lgv3plbgc"/><path class="yf7lrqbiw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:airplane-arrival"} {...others} />);
}

export default Component;
