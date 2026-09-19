import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/s54hki70x.css';
import '../../css/z/z6kf3ab0j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="s54hki70x"/><path class="z6kf3ab0j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:all-bookmark"} {...others} />);
}

export default Component;
