import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/caw0cvbkn.css';
import '../../css/y/ye_i5tq4x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="caw0cvbkn"/><path class="ye_i5tq4x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:browser-com"} {...others} />);
}

export default Component;
