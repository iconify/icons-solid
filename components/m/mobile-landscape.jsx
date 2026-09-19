import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j1cbeukfn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j1cbeukfn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:mobile-landscape"} {...others} />);
}

export default Component;
