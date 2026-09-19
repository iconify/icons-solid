import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dgbheebyr.css';

const viewBox = {"width":1152,"height":1792};
const content = `<path class="dgbheebyr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:mars-stroke-v"} {...others} />);
}

export default Component;
