import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/a/ad2c7vekf.css';
import '../../css/l/lf4i-tb8e.css';
import '../../css/i/igg67cc-w.css';
import '../../css/w/wv7hz7bka.css';
import '../../css/j/j5t7prbbu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="ad2c7vekf"/><path class="lf4i-tb8e"/><path class="igg67cc-w"/><path class="wv7hz7bka"/><path class="j5t7prbbu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:reverse-rotation"} {...others} />);
}

export default Component;
