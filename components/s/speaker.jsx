import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o29qi7b6u.css';
import '../../css/d/dwh0e6bgs.css';
import '../../css/p/pt-pcmp0v.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o29qi7b6u"/><path class="dwh0e6bgs"/><path class="pt-pcmp0v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:speaker"} {...others} />);
}

export default Component;
