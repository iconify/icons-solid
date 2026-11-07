import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/esxisibaw.css';
import '../../css/u/ud65eiioe.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="esxisibaw"/><path class="ud65eiioe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:medal-ribbon-bold-duotone"} {...others} />);
}

export default Component;
