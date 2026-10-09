import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bygov5bnk.css';
import '../../css/c/cgej8yb_k.css';
import '../../css/v/v1mu2tbzf.css';
import '../../css/i/id-912baz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bygov5bnk"/><path class="cgej8yb_k"/><path class="v1mu2tbzf"/><path class="id-912baz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:turbine-maintenance-20"} {...others} />);
}

export default Component;
