import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ccrfalb2f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ccrfalb2f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:garlic-hub-light"} {...others} />);
}

export default Component;
