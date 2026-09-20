import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/plru1qb3z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="plru1qb3z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:cam-disk-6k-seg"} {...others} />);
}

export default Component;
