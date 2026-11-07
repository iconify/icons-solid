import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f6h73cb-x.css';
import '../../css/v/vpz4phbzh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f6h73cb-x"/><path clip-rule="evenodd" class="vpz4phbzh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ssd-round-bold-duotone"} {...others} />);
}

export default Component;
