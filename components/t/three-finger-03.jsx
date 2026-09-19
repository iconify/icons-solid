import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u8cnuve7q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u8cnuve7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:three-finger-03"} {...others} />);
}

export default Component;
