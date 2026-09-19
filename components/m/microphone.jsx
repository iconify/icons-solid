import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/ci27cabli.css';
import '../../css/i/ilvf25-qf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><rect class="ci27cabli"/><path class="ilvf25-qf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:microphone"} {...others} />);
}

export default Component;
