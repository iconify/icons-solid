import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q5kge4yah.css';
import '../../css/j/j70uabc0e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="q5kge4yah"/><path class="j70uabc0e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:toilet-02"} {...others} />);
}

export default Component;
