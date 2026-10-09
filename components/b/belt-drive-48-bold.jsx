import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k48mo0bik.css';
import '../../css/u/u1ifhyb-o.css';
import '../../css/t/t7x_kqnwi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="k48mo0bik"/><path class="u1ifhyb-o"/><path class="t7x_kqnwi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:belt-drive-48-bold"} {...others} />);
}

export default Component;
