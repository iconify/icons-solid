import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v_2inacgz.css';
import '../../css/l/lcg60_b1o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v_2inacgz"/><path class="lcg60_b1o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:zil"} {...others} />);
}

export default Component;
