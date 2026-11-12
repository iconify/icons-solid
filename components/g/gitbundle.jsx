import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v-9jh2b_h.css';
import '../../css/l/l2dczz-db.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="v-9jh2b_h"/><path class="l2dczz-db"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:gitbundle"} {...others} />);
}

export default Component;
