import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hhwvkccwj.css';
import '../../css/f/fk51_rbjn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hhwvkccwj"/><path class="fk51_rbjn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bootstrap"} {...others} />);
}

export default Component;
