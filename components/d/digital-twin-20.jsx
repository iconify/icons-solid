import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dzob-qw6y.css';
import '../../css/z/zqtn4_s2w.css';
import '../../css/z/zga6su7rv.css';
import '../../css/v/vgcdb3bfr.css';
import '../../css/i/i59ff005j.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dzob-qw6y"/><path class="zqtn4_s2w"/><path class="zga6su7rv"/><path class="vgcdb3bfr"/><path class="i59ff005j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:digital-twin-20"} {...others} />);
}

export default Component;
