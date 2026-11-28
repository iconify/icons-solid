import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n02t0mgcv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n02t0mgcv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:air-conditioner"} {...others} />);
}

export default Component;
