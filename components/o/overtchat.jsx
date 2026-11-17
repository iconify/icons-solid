import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rxqvf9bnm.css';
import '../../css/b/b0g2dsbne.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rxqvf9bnm"/><path class="b0g2dsbne"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:overtchat"} {...others} />);
}

export default Component;
