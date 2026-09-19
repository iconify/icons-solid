import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y3dpzbtra.css';
import '../../css/r/ry3fse1zo.css';
import '../../css/u/ul1worher.css';
import '../../css/l/llqfild5y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="y3dpzbtra"><path class="ry3fse1zo"/><path class="ul1worher"/><path class="llqfild5y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:baokemeng"} {...others} />);
}

export default Component;
