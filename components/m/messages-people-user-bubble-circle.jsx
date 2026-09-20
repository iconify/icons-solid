import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b3nfe8bcn.css';
import '../../css/y/y2784pb7o.css';
import '../../css/e/euy324mon.css';
import '../../css/u/u0y2x5bqg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="b3nfe8bcn"/><path class="y2784pb7o"/><path class="euy324mon"/><path class="u0y2x5bqg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:messages-people-user-bubble-circle"} {...others} />);
}

export default Component;
