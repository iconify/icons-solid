import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vseh-l-0s.css';

const viewBox = {"width":1792,"height":1408};
const content = `<path class="vseh-l-0s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:indent"} {...others} />);
}

export default Component;
