import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lz03-sdij.css';
import '../../css/a/ajbkkgb-a.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lz03-sdij"/><path class="ajbkkgb-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:money-bag-20"} {...others} />);
}

export default Component;
