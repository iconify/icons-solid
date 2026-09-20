import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fxxup7lke.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fxxup7lke"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:poeticmetric-dark"} {...others} />);
}

export default Component;
