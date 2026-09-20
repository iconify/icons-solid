import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/a6assn7kf.css';
import '../../css/a/a-3i-7bhb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="a6assn7kf"/><path class="a-3i-7bhb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:sun"} {...others} />);
}

export default Component;
