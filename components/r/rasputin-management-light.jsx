import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pyg63gb4y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pyg63gb4y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rasputin-management-light"} {...others} />);
}

export default Component;
