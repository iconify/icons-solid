import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nlnn0ibiz.css';
import '../../css/e/e_rm4btzd.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="nlnn0ibiz"/><path class="e_rm4btzd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:map-location"} {...others} />);
}

export default Component;
