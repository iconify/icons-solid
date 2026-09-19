import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wt6ddqrsu.css';
import '../../css/y/yj8rovbyf.css';
import '../../css/v/vxg4v5b-i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="wt6ddqrsu"/><circle class="yj8rovbyf"/><path class="vxg4v5b-i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:voicemail"} {...others} />);
}

export default Component;
