import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ix3svnbbt.css';
import '../../css/g/gj1g8xb8y.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ix3svnbbt"/><path class="gj1g8xb8y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:airplay-20-bold"} {...others} />);
}

export default Component;
