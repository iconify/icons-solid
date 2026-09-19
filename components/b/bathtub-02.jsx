import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/is90i7aof.css';
import '../../css/p/ptcswfbkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="is90i7aof"/><path class="ptcswfbkn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bathtub-02"} {...others} />);
}

export default Component;
