import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p9qxjwb6f.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="p9qxjwb6f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:text-wrap-slash"} {...others} />);
}

export default Component;
