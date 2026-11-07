import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/k/ktnoc0bvp.css';
import '../../css/g/gtm8fkbhm.css';
import '../../css/n/noixcxd5z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path clip-rule="evenodd" class="ktnoc0bvp"/><path class="gtm8fkbhm"/></g><path class="noixcxd5z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:plug-circle-bold-duotone"} {...others} />);
}

export default Component;
