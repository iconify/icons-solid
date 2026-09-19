import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dah10_0uo.css';

const viewBox = {"width":1920,"height":1408};
const content = `<path class="dah10_0uo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:cloud-download"} {...others} />);
}

export default Component;
