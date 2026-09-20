import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lq3qa1d7q.css';
import '../../css/i/itgv6gmfb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lq3qa1d7q"/><path class="itgv6gmfb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:chart"} {...others} />);
}

export default Component;
