import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v1x-ibbak.css';
import '../../css/h/hlue_gbgu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="v1x-ibbak"/><path class="hlue_gbgu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pellet-boiler-20-bold"} {...others} />);
}

export default Component;
