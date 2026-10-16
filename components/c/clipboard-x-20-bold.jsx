import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6t120hgc.css';
import '../../css/z/z84soivbf.css';
import '../../css/n/n2mrg8b6m.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="z6t120hgc"/><path class="z84soivbf"/><path class="n2mrg8b6m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:clipboard-x-20-bold"} {...others} />);
}

export default Component;
