import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/ok4hk_31l.css';
import '../../css/w/wttqjwbaf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ok4hk_31l"/><path class="wttqjwbaf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:wind-power"} {...others} />);
}

export default Component;
