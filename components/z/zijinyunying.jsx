import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/p/p5rsn9lsf.css';
import '../../css/g/gtioo54ca.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="p5rsn9lsf"/><path class="gtioo54ca"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:zijinyunying"} {...others} />);
}

export default Component;
