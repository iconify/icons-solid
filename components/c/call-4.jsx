import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/slhw7xb9s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="slhw7xb9s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:call-4"} {...others} />);
}

export default Component;
