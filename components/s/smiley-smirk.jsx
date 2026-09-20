import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/axoj8tbup.css';
import '../../css/r/r2th9g7qg.css';
import '../../css/f/f-7wisb7w.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="axoj8tbup"/><path class="r2th9g7qg"/><path class="f-7wisb7w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:smiley-smirk"} {...others} />);
}

export default Component;
