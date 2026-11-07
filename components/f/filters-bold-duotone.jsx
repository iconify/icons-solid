import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p2t283ehz.css';
import '../../css/l/l975lbcph.css';
import '../../css/m/m86cqj3me.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="p2t283ehz"/><path class="l975lbcph"/><path class="m86cqj3me"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:filters-bold-duotone"} {...others} />);
}

export default Component;
