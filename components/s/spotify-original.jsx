import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bk2j-_b-u.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="bk2j-_b-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:spotify-original"} {...others} />);
}

export default Component;
