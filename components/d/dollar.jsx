import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m51pp1z2q.css';

const viewBox = {"width":960,"height":1792};
const content = `<path class="m51pp1z2q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:dollar"} {...others} />);
}

export default Component;
