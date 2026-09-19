import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dgk9v4g2f.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="dgk9v4g2f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:buy-me-a-coffee"} {...others} />);
}

export default Component;
