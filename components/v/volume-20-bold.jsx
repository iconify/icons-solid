import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gqvgs1b3g.css';
import '../../css/u/uiqysqbcu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gqvgs1b3g"/><path class="uiqysqbcu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:volume-20-bold"} {...others} />);
}

export default Component;
