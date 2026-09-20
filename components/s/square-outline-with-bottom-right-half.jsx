import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2pgsccln.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="k2pgsccln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:square-outline-with-bottom-right-half"} {...others} />);
}

export default Component;
