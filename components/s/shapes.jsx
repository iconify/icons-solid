import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yxoajqbth.css';
import '../../css/o/ov6bxrb2y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yxoajqbth"/><path class="ov6bxrb2y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:shapes"} {...others} />);
}

export default Component;
