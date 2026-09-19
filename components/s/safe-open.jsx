import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fs124bhwf.css';
import '../../css/m/ms8df3btg.css';
import '../../css/y/yth7llb8a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="fs124bhwf"/><path class="ms8df3btg"/><path class="yth7llb8a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:safe-open"} {...others} />);
}

export default Component;
