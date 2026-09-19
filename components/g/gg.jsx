import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oagrx1-ci.css';

const viewBox = {"width":1920,"height":1344};
const content = `<path class="oagrx1-ci"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:gg"} {...others} />);
}

export default Component;
