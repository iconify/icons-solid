import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/py41x_zcy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="py41x_zcy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:drag-indicator-alt-duotone"} {...others} />);
}

export default Component;
