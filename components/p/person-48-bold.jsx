import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sh5m4gk5z.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="sh5m4gk5z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:person-48-bold"} {...others} />);
}

export default Component;
