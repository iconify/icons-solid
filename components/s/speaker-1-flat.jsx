import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p4ep13bxj.css';
import '../../css/q/q-e10hbbm.css';
import '../../css/v/vto4kkbzv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="p4ep13bxj"/><path class="q-e10hbbm"/><path clip-rule="evenodd" class="vto4kkbzv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:speaker-1-flat"} {...others} />);
}

export default Component;
