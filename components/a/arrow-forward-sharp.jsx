import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h6ec_n6vv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h6ec_n6vv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:arrow-forward-sharp"} {...others} />);
}

export default Component;
