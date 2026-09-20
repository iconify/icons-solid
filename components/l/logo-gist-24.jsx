import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ueozdva-h.css';

const viewBox = {"width":38,"height":24};
const content = `<path class="ueozdva-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:logo-gist-24"} {...others} />);
}

export default Component;
