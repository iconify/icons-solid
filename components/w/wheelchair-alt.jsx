import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m18m25u6z.css';

const viewBox = {"width":1408,"height":1792};
const content = `<path class="m18m25u6z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:wheelchair-alt"} {...others} />);
}

export default Component;
