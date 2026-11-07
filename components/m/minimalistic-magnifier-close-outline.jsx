import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p63rntbns.css';
import '../../css/w/wmcky1b9o.css';
import '../../css/w/w314yoqtw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p63rntbns"/><path class="wmcky1b9o"/><path clip-rule="evenodd" class="w314yoqtw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:minimalistic-magnifier-close-outline"} {...others} />);
}

export default Component;
