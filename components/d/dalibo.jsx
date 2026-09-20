import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hqho8nb-e.css';
import '../../css/k/k7wugp4nh.css';
import '../../css/h/hnviy2tvz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hqho8nb-e"/><path class="k7wugp4nh"/><path class="hnviy2tvz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dalibo"} {...others} />);
}

export default Component;
