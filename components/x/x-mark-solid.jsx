import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tzv4o8oal.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tzv4o8oal"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:x-mark-solid"} {...others} />);
}

export default Component;
