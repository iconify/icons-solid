import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/stfrz6bje.css';
import '../../css/n/nwyzuufrs.css';
import '../../css/f/flmf6fbyy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="stfrz6bje"/><path class="nwyzuufrs"/><path class="flmf6fbyy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:user-square3"} {...others} />);
}

export default Component;
