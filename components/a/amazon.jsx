import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fp52dj2tx.css';
import '../../css/y/y5ok-dbwn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fp52dj2tx"/><path class="y5ok-dbwn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:amazon"} {...others} />);
}

export default Component;
