import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/amb5sjbsf.css';

const viewBox = {"width":1792,"height":1536};
const content = `<path class="amb5sjbsf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:times-rectangle-o"} {...others} />);
}

export default Component;
