import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aejhl3bve.css';
import '../../css/n/npahmybzw.css';
import '../../css/w/ws0pfhb_f.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="aejhl3bve"/><path class="npahmybzw"/><path class="ws0pfhb_f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:database-server-2"} {...others} />);
}

export default Component;
