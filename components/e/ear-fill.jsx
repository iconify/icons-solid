import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/la_o4hbct.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="la_o4hbct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:ear-fill"} {...others} />);
}

export default Component;
