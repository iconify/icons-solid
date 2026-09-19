import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n2y8962pf.css';

const viewBox = {"width":464,"height":448};
const content = `<path class="n2y8962pf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:youtube-alt"} {...others} />);
}

export default Component;
