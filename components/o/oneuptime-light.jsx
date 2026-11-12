import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t00b9jt-d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t00b9jt-d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:oneuptime-light"} {...others} />);
}

export default Component;
