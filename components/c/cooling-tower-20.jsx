import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g8xms1bet.css';
import '../../css/w/wius6xb7f.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="g8xms1bet"/><path class="wius6xb7f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cooling-tower-20"} {...others} />);
}

export default Component;
