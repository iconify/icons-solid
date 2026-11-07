import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o1omc9nvs.css';
import '../../css/u/unld3absx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o1omc9nvs"/><path class="unld3absx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hanger-2-bold-duotone"} {...others} />);
}

export default Component;
