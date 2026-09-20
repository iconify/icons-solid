import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l2766uktk.css';
import '../../css/l/l2dczz-db.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="l2766uktk"/><path class="l2dczz-db"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:gitbundle"} {...others} />);
}

export default Component;
