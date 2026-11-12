import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ugrv1ixqz.css';
import '../../css/y/ylok2ab9i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ugrv1ixqz"/><path class="ylok2ab9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ironcalc"} {...others} />);
}

export default Component;
