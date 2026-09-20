import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v1xy5i58a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="v1xy5i58a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:zerotier-light"} {...others} />);
}

export default Component;
