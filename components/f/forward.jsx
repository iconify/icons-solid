import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qgc40abje.css';
import '../../css/m/m4c_7u5go.css';
import '../../css/r/rxsvazbuv.css';
import '../../css/j/j-gltbc1l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="qgc40abje wm-shadow"/><path class="m4c_7u5go wm-shadow"/><path class="rxsvazbuv"/><path class="j-gltbc1l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:forward"} {...others} />);
}

export default Component;
