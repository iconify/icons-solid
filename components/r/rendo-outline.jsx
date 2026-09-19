import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/km3x3cedu.css';
import '../../css/c/c_pfbfb0h.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="km3x3cedu"/><path clip-rule="evenodd" class="c_pfbfb0h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:rendo-outline"} {...others} />);
}

export default Component;
