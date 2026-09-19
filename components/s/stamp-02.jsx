import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/m6f-fb4xp.css';
import '../../css/s/semh0mbjq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="m6f-fb4xp"/><path class="semh0mbjq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:stamp-02"} {...others} />);
}

export default Component;
