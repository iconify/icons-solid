import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uzkebvbwp.css';
import '../../css/h/h3qchvbhn.css';
import '../../css/u/uw1uypbnt.css';
import '../../css/o/o9dpakbzr.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="uzkebvbwp"/><rect class="h3qchvbhn"/><rect class="uw1uypbnt"/><rect class="o9dpakbzr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:cellular-outline"} {...others} />);
}

export default Component;
