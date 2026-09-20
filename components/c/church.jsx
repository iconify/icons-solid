import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fihun-14b.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="fihun-14b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:church"} {...others} />);
}

export default Component;
