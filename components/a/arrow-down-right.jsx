import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/cmgbt1b6s.css';
import '../../css/a/a_68u1dmn.css';
import '../../css/h/hsy51r07k.css';
import '../../css/g/gv9q0vb0f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="cmgbt1b6s wm-shadow"/><path class="a_68u1dmn wm-shadow"/><path class="hsy51r07k"/><path class="gv9q0vb0f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:arrow-down-right"} {...others} />);
}

export default Component;
