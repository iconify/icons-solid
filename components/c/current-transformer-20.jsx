import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m9i0psc1u.css';
import '../../css/d/d58o7tbnq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="m9i0psc1u"/><path class="d58o7tbnq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:current-transformer-20"} {...others} />);
}

export default Component;
