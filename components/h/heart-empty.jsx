import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lzna4a00y.css';

const viewBox = {"width":1063,"height":1000};
const content = `<path class="lzna4a00y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"websymbol:heart-empty"} {...others} />);
}

export default Component;
