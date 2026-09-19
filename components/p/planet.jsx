import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nytgl6bwe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nytgl6bwe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:planet"} {...others} />);
}

export default Component;
