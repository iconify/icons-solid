import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cis9tc4cv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cis9tc4cv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:pyr"} {...others} />);
}

export default Component;
