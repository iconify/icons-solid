import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wd_s0sb-a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wd_s0sb-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pepperminty-wiki-light"} {...others} />);
}

export default Component;
