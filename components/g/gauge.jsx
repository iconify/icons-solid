import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/lbha9ecwq.css';
import '../../css/v/v67rwzb7l.css';
import '../../css/k/kw04ru5zn.css';
import '../../css/u/urmv84b7a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="lbha9ecwq wm-shadow"/><path class="v67rwzb7l wm-shadow"/><path class="kw04ru5zn"/><path class="urmv84b7a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:gauge"} {...others} />);
}

export default Component;
