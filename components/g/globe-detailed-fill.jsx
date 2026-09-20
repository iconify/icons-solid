import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b_h9pdmlz.css';
import '../../css/n/nx_nl5ydl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b_h9pdmlz"/><path clip-rule="evenodd" class="nx_nl5ydl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:globe-detailed-fill"} {...others} />);
}

export default Component;
