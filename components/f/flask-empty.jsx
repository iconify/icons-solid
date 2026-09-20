import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n0ygaxjmn.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="n0ygaxjmn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:flask-empty"} {...others} />);
}

export default Component;
