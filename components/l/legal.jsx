import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mf8ifdctz.css';

const viewBox = {"width":1760,"height":1760};
const content = `<path class="mf8ifdctz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:legal"} {...others} />);
}

export default Component;
