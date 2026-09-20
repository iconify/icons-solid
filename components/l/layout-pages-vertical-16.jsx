import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p29vpb_np.css';
import '../../css/j/jp5u-n8ve.css';
import '../../css/l/l8htvablp.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="p29vpb_np"/><path class="jp5u-n8ve"/><path class="l8htvablp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:layout-pages-vertical-16"} {...others} />);
}

export default Component;
