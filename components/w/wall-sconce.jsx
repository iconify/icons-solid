import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/se80d2bif.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="se80d2bif"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:wall-sconce"} {...others} />);
}

export default Component;
