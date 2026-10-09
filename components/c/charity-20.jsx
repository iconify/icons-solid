import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lhxatuodl.css';
import '../../css/m/medb0fb1f.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lhxatuodl"/><path class="medb0fb1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:charity-20"} {...others} />);
}

export default Component;
