import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wv3cf2bwb.css';

const viewBox = {"width":1000,"height":1000};
const content = `<path class="wv3cf2bwb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"websymbol:progress-6"} {...others} />);
}

export default Component;
