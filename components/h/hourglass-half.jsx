import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rd-rz_mmy.css';

const viewBox = {"width":1536,"height":1792};
const content = `<path class="rd-rz_mmy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:hourglass-half"} {...others} />);
}

export default Component;
