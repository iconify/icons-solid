import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fsvgi0bxr.css';
import '../../css/e/eojx8bb3q.css';
import '../../css/z/zxkqjubrb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="fsvgi0bxr"/><path class="eojx8bb3q"/><path clip-rule="evenodd" class="zxkqjubrb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:turntable-note-filled"} {...others} />);
}

export default Component;
