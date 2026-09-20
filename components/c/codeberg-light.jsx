import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fujqedbkp.css';
import '../../css/e/e15e1_l3m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fujqedbkp"/><path class="e15e1_l3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:codeberg-light"} {...others} />);
}

export default Component;
