import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gr1zmubav.css';
import '../../css/k/kux3ecbeo.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="gr1zmubav"/><path class="kux3ecbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:caddy"} {...others} />);
}

export default Component;
