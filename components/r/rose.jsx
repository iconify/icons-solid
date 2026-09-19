import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ln-a6_h5f.css';

const viewBox = {"width":1536,"height":1792};
const content = `<path class="ln-a6_h5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:rose"} {...others} />);
}

export default Component;
