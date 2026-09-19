import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/amcaz4b5k.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="amcaz4b5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:waxing-gibbous-moon-symbol"} {...others} />);
}

export default Component;
