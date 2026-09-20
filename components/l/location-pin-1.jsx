import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/z/zc4q-sb_r.css';
import '../../css/j/juj9rkxbs.css';
import '../../css/n/nn88d9byk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="zc4q-sb_r"/><path class="juj9rkxbs"/><path class="nn88d9byk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:location-pin-1"} {...others} />);
}

export default Component;
