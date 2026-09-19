import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pm5zgub6u.css';

const viewBox = {"width":1920,"height":1536};
const content = `<path class="pm5zgub6u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:credit-card"} {...others} />);
}

export default Component;
