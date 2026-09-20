import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hjmd_m1pj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hjmd_m1pj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:gdgt-logo-solid"} {...others} />);
}

export default Component;
