import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/csk5pbt9s.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="csk5pbt9s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:patreon"} {...others} />);
}

export default Component;
