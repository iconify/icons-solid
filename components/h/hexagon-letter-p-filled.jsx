import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iez0y29ij.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iez0y29ij"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:hexagon-letter-p-filled"} {...others} />);
}

export default Component;
