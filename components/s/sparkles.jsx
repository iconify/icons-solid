import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tdzubmfjh.css';
import '../../css/j/jgaige_pi.css';
import '../../css/k/ki_-kdbap.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="tdzubmfjh"/><path clip-rule="evenodd" class="jgaige_pi"/><path class="ki_-kdbap"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:sparkles"} {...others} />);
}

export default Component;
