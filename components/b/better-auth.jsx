import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1s_e0b7s.css';
import '../../css/c/cvuri1beu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n1s_e0b7s"/><path class="cvuri1beu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:better-auth"} {...others} />);
}

export default Component;
