import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qtwzzdbkp.css';
import '../../css/r/rri86bcuc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qtwzzdbkp"/><path class="rri86bcuc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:cart-minus"} {...others} />);
}

export default Component;
