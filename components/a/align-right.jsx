import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/c-pnitbjl.css';
import '../../css/c/c1bk-gjdr.css';
import '../../css/z/zm2kk9bpg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="c-pnitbjl wm-shadow"/><path class="c1bk-gjdr wm-shadow"/><path class="zm2kk9bpg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:align-right"} {...others} />);
}

export default Component;
