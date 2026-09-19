import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/isdc2k3ct.css';

const viewBox = {"width":1536,"height":1504};
const content = `<path class="isdc2k3ct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:github"} {...others} />);
}

export default Component;
