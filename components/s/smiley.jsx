import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wdq3wcbxh.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="wdq3wcbxh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:smiley"} {...others} />);
}

export default Component;
