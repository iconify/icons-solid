import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j9y2hdich.css';
import '../../css/m/maibb9b4m.css';
import '../../css/g/g9fwkabiz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="j9y2hdich"/><path class="maibb9b4m"/><path class="g9fwkabiz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:green-hydrogen-20-bold"} {...others} />);
}

export default Component;
