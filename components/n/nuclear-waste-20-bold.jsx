import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xs-k6d3fm.css';
import '../../css/c/c1--uvb0p.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xs-k6d3fm"/><path class="c1--uvb0p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:nuclear-waste-20-bold"} {...others} />);
}

export default Component;
