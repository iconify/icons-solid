import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bvltjac2r.css';
import '../../css/f/fbhmvz7nk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bvltjac2r"/><path class="fbhmvz7nk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:eye-off-20"} {...others} />);
}

export default Component;
