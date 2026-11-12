import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iii3nbb6b.css';
import '../../css/s/sdij9c2vr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="iii3nbb6b"/><path class="sdij9c2vr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:sharkord-light"} {...others} />);
}

export default Component;
