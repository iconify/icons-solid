import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hqrder4yr.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="hqrder4yr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:laravel-wordmark"} {...others} />);
}

export default Component;
