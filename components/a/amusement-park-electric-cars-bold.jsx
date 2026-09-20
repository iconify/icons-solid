import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mat5etbat.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mat5etbat"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:amusement-park-electric-cars-bold"} {...others} />);
}

export default Component;
