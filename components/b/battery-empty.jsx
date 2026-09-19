import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a6kjclb7s.css';

const viewBox = {"width":2304,"height":1280};
const content = `<path class="a6kjclb7s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:battery-empty"} {...others} />);
}

export default Component;
