import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/foflm7r3e.css';
import '../../css/t/tsj3hfbzj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="foflm7r3e"/><path class="tsj3hfbzj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:coinmarketcap-blue"} {...others} />);
}

export default Component;
