import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bknbsubyw.css';
import '../../css/j/jh7sodbdb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><rect class="bknbsubyw"/><path class="jh7sodbdb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:microphone-speaking-solid"} {...others} />);
}

export default Component;
