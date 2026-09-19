import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f6_ibfb0f.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="f6_ibfb0f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-brands:square-odnoklassniki"} {...others} />);
}

export default Component;
