import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/af8j95bax.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="af8j95bax"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:email-send-outline"} {...others} />);
}

export default Component;
