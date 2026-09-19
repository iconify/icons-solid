import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sqa3tkb1n.css';
import '../../css/x/x_-bf3btl.css';
import '../../css/g/gm241tb0d.css';
import '../../css/i/icsy_rbek.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="sqa3tkb1n"><path class="x_-bf3btl"/><path class="gm241tb0d"/><path class="icsy_rbek"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:calendar-plus-solid"} {...others} />);
}

export default Component;
