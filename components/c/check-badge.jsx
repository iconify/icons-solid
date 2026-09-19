import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/twd58db8o.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="twd58db8o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:check-badge"} {...others} />);
}

export default Component;
