import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fdxeyrj_v.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="fdxeyrj_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:sound-recognition-search"} {...others} />);
}

export default Component;
