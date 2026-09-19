import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g8dfhpbfn.css';
import '../../css/x/x89edcbli.css';
import '../../css/g/gjxb9oblr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="g8dfhpbfn"/><path class="x89edcbli"/><path clip-rule="evenodd" class="gjxb9oblr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:instagram"} {...others} />);
}

export default Component;
