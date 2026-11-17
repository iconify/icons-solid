import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gkccombky.css';
import '../../css/r/r0yz7hbft.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="gkccombky"/><path class="r0yz7hbft"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:torsher"} {...others} />);
}

export default Component;
