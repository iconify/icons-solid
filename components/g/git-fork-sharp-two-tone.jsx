import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/y/yxrw5gbvw.css';
import '../../css/f/fnba-4b3q.css';
import '../../css/p/ppj72pith.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="yxrw5gbvw"/><path class="fnba-4b3q"/><path class="ppj72pith"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:git-fork-sharp-two-tone"} {...others} />);
}

export default Component;
