import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hx64ur8pu.css';
import '../../css/d/da2w1iter.css';
import '../../css/v/vvr7kxj9u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hx64ur8pu"/><path class="da2w1iter"/><path class="vvr7kxj9u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:cube"} {...others} />);
}

export default Component;
