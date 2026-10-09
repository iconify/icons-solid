import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n6i7h5b1b.css';
import '../../css/a/a98cjoanz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n6i7h5b1b"/><path class="a98cjoanz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:corner-up-right-20"} {...others} />);
}

export default Component;
