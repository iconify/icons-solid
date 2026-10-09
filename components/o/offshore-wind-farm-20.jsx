import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/enxtphbky.css';
import '../../css/n/n4d5fac5i.css';
import '../../css/u/u6c3ru_1r.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="enxtphbky"/><path class="n4d5fac5i"/><path class="u6c3ru_1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:offshore-wind-farm-20"} {...others} />);
}

export default Component;
