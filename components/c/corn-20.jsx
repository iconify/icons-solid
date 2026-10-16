import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xdt8a4bzn.css';
import '../../css/a/aww9a8bny.css';
import '../../css/l/lypweqb-i.css';
import '../../css/g/gl28njbdi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xdt8a4bzn"/><path class="aww9a8bny"/><path class="lypweqb-i"/><path class="gl28njbdi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:corn-20"} {...others} />);
}

export default Component;
