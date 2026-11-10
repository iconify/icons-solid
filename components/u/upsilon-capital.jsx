import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f30r4v8bi.css';
import '../../css/i/i8p3d6bjp.css';
import '../../css/z/z3mdksbjk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="f30r4v8bi"><path class="i8p3d6bjp"/><path class="z3mdksbjk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:upsilon-capital"} {...others} />);
}

export default Component;
