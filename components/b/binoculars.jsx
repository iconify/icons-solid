import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ien7yn-4p.css';

const viewBox = {"width":1792,"height":1792};
const content = `<path class="ien7yn-4p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:binoculars"} {...others} />);
}

export default Component;
