import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v1njp3l4b.css';
import '../../css/w/wrwe4yb5f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="v1njp3l4b"/><path class="wrwe4yb5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteocons:moon-first-quarter"} {...others} />);
}

export default Component;
