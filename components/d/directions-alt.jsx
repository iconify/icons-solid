import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a6oy1q_yr.css';
import '../../css/u/uai2ftzjf.css';
import '../../css/c/ca5fhmbsq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a6oy1q_yr"/><path class="uai2ftzjf"/><path class="ca5fhmbsq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:directions-alt"} {...others} />);
}

export default Component;
