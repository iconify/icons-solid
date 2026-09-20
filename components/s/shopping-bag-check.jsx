import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/x2yuxabkk.css';
import '../../css/k/kfcgn2bfm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="x2yuxabkk"/><path class="kfcgn2bfm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:shopping-bag-check"} {...others} />);
}

export default Component;
