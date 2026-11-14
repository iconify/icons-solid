import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sp3ymr0mh.css';
import '../../css/l/lo5azsbyk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="sp3ymr0mh"/><path class="lo5azsbyk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:folder-unlocked"} {...others} />);
}

export default Component;
