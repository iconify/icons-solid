import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e1jf6ebeu.css';

const viewBox = {"width":1408,"height":1600};
const content = `<path class="e1jf6ebeu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:html5"} {...others} />);
}

export default Component;
