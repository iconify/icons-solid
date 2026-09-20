import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/g/gq7ai23mp.css';
import '../../css/s/sazcrr7dg.css';
import '../../css/w/wvhlwgbgm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="gq7ai23mp"/><path class="sazcrr7dg"/><path class="wvhlwgbgm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:star-wars-darth-vader"} {...others} />);
}

export default Component;
