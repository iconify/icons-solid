import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/ada5cgbjk.css';
import '../../css/w/w-o6hg-yd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ada5cgbjk"/><path class="w-o6hg-yd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:delivery-secure-02"} {...others} />);
}

export default Component;
