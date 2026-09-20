import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f0_xjvx6f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f0_xjvx6f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:currency-sign-rupee-decrease-bold"} {...others} />);
}

export default Component;
