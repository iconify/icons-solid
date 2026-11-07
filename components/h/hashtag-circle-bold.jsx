import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w43uqtbnn.css';
import '../../css/p/pzgd11spf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w43uqtbnn"/><path clip-rule="evenodd" class="pzgd11spf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hashtag-circle-bold"} {...others} />);
}

export default Component;
