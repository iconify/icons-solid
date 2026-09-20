import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p7ij8m92l.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="p7ij8m92l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:climbing-wall"} {...others} />);
}

export default Component;
