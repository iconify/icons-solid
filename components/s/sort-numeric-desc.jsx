import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hghykk9oe.css';

const viewBox = {"width":1472,"height":1792};
const content = `<path class="hghykk9oe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:sort-numeric-desc"} {...others} />);
}

export default Component;
