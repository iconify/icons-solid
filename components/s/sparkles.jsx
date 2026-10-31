import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/z/zjz1e9osm.css';
import '../../css/f/f8nt5l77j.css';
import '../../css/v/vprxwrlko.css';
import '../../css/x/xiy6v4b3g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow zjz1e9osm"/><path class="f8nt5l77j wm-shadow"/><path class="vprxwrlko"/><path class="xiy6v4b3g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:sparkles"} {...others} />);
}

export default Component;
