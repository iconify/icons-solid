import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ua37dlc9i.css';
import '../../css/t/tc2tebwvq.css';
import '../../css/p/px7d78s0u.css';
import '../../css/p/pn3feur3r.css';
import '../../css/w/waflsubxv.css';
import '../../css/s/sze9c--8z.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="ua37dlc9i"/><path class="tc2tebwvq"/><path class="px7d78s0u"/><path class="pn3feur3r"/><path class="waflsubxv"/><path class="sze9c--8z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:uganda"} {...others} />);
}

export default Component;
