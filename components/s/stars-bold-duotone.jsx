import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r4ekznb-a.css';
import '../../css/u/ucfqbabvw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r4ekznb-a"/><path class="ucfqbabvw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:stars-bold-duotone"} {...others} />);
}

export default Component;
