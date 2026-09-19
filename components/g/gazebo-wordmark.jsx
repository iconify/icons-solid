import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i9n_e1oth.css';
import '../../css/l/l6e1lqxzx.css';
import '../../css/f/fmobx0btv.css';
import '../../css/u/u1jdc_bkh.css';
import '../../css/k/k8b4iz71r.css';
import '../../css/j/j42-rebgt.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="i9n_e1oth"/><path class="l6e1lqxzx"/><path class="fmobx0btv"/><path class="u1jdc_bkh"/><path class="k8b4iz71r"/><path class="j42-rebgt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:gazebo-wordmark"} {...others} />);
}

export default Component;
