import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dufl35bfe.css';

const viewBox = {"width":1536,"height":1792};
const content = `<path class="dufl35bfe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:hand-o-up"} {...others} />);
}

export default Component;
