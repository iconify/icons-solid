import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ki_1ns98y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ki_1ns98y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:fingerprint"} {...others} />);
}

export default Component;
