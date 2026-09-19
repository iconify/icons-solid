import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uxi3aebem.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uxi3aebem"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:curvy-left-right-direction"} {...others} />);
}

export default Component;
