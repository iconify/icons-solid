import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pqu2_e4mu.css';
import '../../css/o/ohi1dmbgd.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="pqu2_e4mu"/><path class="ohi1dmbgd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:typemill"} {...others} />);
}

export default Component;
