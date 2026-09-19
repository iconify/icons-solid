import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pztf3lfwa.css';
import '../../css/x/xp_9kjcys.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pztf3lfwa"/><path class="xp_9kjcys"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:more-vertical-square-02"} {...others} />);
}

export default Component;
