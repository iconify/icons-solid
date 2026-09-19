import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pad-kj4bv.css';

const viewBox = {"width":1792,"height":1792};
const content = `<path class="pad-kj4bv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:gg-circle"} {...others} />);
}

export default Component;
