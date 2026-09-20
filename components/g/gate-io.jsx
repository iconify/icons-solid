import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c3d7yhb3u.css';
import '../../css/m/m9_h30bse.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c3d7yhb3u"/><path class="m9_h30bse"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:gate-io"} {...others} />);
}

export default Component;
