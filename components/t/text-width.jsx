import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sf5_5ebiv.css';

const viewBox = {"width":1536,"height":1664};
const content = `<path class="sf5_5ebiv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:text-width"} {...others} />);
}

export default Component;
