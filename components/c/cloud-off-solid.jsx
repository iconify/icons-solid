import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fp_s0tzwx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="fp_s0tzwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:cloud-off-solid"} {...others} />);
}

export default Component;
