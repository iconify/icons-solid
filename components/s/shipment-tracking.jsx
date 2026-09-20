import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g635niwpv.css';
import '../../css/r/rx4rzrkqv.css';
import '../../css/c/c0f4j5bgw.css';
import '../../css/r/rw2ytpg0a.css';
import '../../css/f/fk21-ab6q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="g635niwpv"/><path class="rx4rzrkqv"/><path class="c0f4j5bgw"/><path class="rw2ytpg0a"/><path class="fk21-ab6q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:shipment-tracking"} {...others} />);
}

export default Component;
