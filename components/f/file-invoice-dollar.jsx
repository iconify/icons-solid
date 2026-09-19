import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k0jn4qb1b.css';

const viewBox = {"width":384,"height":512};
const content = `<path class="k0jn4qb1b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:file-invoice-dollar"} {...others} />);
}

export default Component;
