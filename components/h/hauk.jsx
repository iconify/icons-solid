import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lomr6bbhm.css';
import '../../css/k/k5k2phbka.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lomr6bbhm"/><path class="k5k2phbka"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:hauk"} {...others} />);
}

export default Component;
