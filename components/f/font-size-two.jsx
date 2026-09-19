import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/q/q5a56k1qq.css';
import '../../css/u/u8tso8bmp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="q5a56k1qq"/><path class="u8tso8bmp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:font-size-two"} {...others} />);
}

export default Component;
