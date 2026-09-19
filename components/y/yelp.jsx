import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cdjyr7bzc.css';

const viewBox = {"width":1408,"height":1792};
const content = `<path class="cdjyr7bzc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:yelp"} {...others} />);
}

export default Component;
