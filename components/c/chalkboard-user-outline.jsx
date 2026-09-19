import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/een1a4tir.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="een1a4tir"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:chalkboard-user-outline"} {...others} />);
}

export default Component;
