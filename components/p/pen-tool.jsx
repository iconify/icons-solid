import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/lryctbccs.css';
import '../../css/i/iv7ukhb8n.css';
import '../../css/x/xxutnhb6o.css';
import '../../css/x/xwvuugy7n.css';
import '../../css/s/s_aaoy9gm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="lryctbccs wm-shadow"/><path class="iv7ukhb8n wm-shadow"/><path class="xxutnhb6o"/><path class="xwvuugy7n"/><path class="s_aaoy9gm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:pen-tool"} {...others} />);
}

export default Component;
