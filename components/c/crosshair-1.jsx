import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/h/haz6mub2y.css';
import '../../css/d/dupi9nrhf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="haz6mub2y"/><path class="dupi9nrhf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:crosshair-1"} {...others} />);
}

export default Component;
