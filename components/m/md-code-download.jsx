import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g8-n1ibyr.css';
import '../../css/z/zfla53asp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="g8-n1ibyr"/><path class="zfla53asp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-code-download"} {...others} />);
}

export default Component;
