import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d6y8ptl6u.css';

const viewBox = {"width":1760,"height":1280};
const content = `<path class="d6y8ptl6u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:maxcdn"} {...others} />);
}

export default Component;
