import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0q0qobhx.css';
import '../../css/x/xoum1hbfu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a0q0qobhx"/><path class="xoum1hbfu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:listenbrainz"} {...others} />);
}

export default Component;
