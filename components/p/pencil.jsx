import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/z5c4ebcrr.css';
import '../../css/t/tk1ferbdb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="z5c4ebcrr"/><path class="tk1ferbdb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:pencil"} {...others} />);
}

export default Component;
