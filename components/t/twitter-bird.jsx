import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/du0jn2f1w.css';

const viewBox = {"width":1231.051,"height":1000};
const content = `<path class="du0jn2f1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"brandico:twitter-bird"} {...others} />);
}

export default Component;
