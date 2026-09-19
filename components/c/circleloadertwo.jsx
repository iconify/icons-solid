import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cb_i9scyn.css';

const viewBox = {"width":960,"height":960};
const content = `<path class="cb_i9scyn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:circleloadertwo"} {...others} />);
}

export default Component;
