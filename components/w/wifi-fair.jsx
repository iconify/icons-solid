import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lpitmabnk.css';
import '../../css/o/oyxz6ib2l.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><path class="lpitmabnk"/><path class="oyxz6ib2l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:wifi-fair"} {...others} />);
}

export default Component;
