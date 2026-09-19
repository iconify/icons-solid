import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k0-g9ab5o.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="k0-g9ab5o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:buttonx"} {...others} />);
}

export default Component;
