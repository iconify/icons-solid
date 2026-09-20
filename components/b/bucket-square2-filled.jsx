import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/ham-wqb_z.css';
import '../../css/d/dwhsjmobk.css';
import '../../css/z/z6re8rbyg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ham-wqb_z"/><path class="dwhsjmobk"/><path class="z6re8rbyg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:bucket-square2-filled"} {...others} />);
}

export default Component;
