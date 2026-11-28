import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jo4rkbcje.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jo4rkbcje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:brain-gear"} {...others} />);
}

export default Component;
