import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x_15mh_uj.css';

const viewBox = {"width":610,"height":700};
const content = `<path class="x_15mh_uj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"il:ellipsis"} {...others} />);
}

export default Component;
