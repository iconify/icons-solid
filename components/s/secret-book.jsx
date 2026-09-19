import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ni1s3p96w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ni1s3p96w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:secret-book"} {...others} />);
}

export default Component;
