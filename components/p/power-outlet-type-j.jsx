import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/o_rsup5oq.css';
import '../../css/r/r2w7r7b1e.css';
import '../../css/j/jfbs04b-h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="o_rsup5oq"/><path class="r2w7r7b1e"/><path class="jfbs04b-h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:power-outlet-type-j"} {...others} />);
}

export default Component;
