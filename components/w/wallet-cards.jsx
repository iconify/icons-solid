import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/j/j-tdpxbhx.css';
import '../../css/o/oac2nqq5z.css';
import '../../css/x/xjhj-_vfa.css';
import '../../css/l/l8c3weu7g.css';
import '../../css/b/buyysmb1r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="j-tdpxbhx wm-shadow"/><path class="oac2nqq5z wm-shadow"/><path class="xjhj-_vfa"/><path class="l8c3weu7g"/><path class="buyysmb1r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:wallet-cards"} {...others} />);
}

export default Component;
