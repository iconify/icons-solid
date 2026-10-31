import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qy5l4bcpk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qy5l4bcpk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cup-soda-gloss"} {...others} />);
}

export default Component;
