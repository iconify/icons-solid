import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g113u0-1c.css';
import '../../css/m/m8xzmqmih.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="g113u0-1c"/><path class="m8xzmqmih"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:soda-can-20"} {...others} />);
}

export default Component;
