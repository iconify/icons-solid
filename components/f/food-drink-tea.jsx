import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f2m6tab3g.css';
import '../../css/v/v799lmbxv.css';
import '../../css/v/vnf_fxb6n.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="f2m6tab3g"/><path class="v799lmbxv"/><path class="vnf_fxb6n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:food-drink-tea"} {...others} />);
}

export default Component;
