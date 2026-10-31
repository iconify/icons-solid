import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gsja-j37j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gsja-j37j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:hotel-gloss"} {...others} />);
}

export default Component;
