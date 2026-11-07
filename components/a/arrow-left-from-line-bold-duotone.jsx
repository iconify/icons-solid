import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oqfv9_bht.css';
import '../../css/g/g2z0o6bph.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oqfv9_bht"/><path class="g2z0o6bph"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-left-from-line-bold-duotone"} {...others} />);
}

export default Component;
