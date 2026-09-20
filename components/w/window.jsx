import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/elgy5zr8s.css';
import '../../css/w/wwwp5lsdt.css';
import '../../css/b/byh_7nqws.css';
import '../../css/u/u-58rybsd.css';
import '../../css/k/kgkc46ncq.css';
import '../../css/q/qendztx4a.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="elgy5zr8s"/><rect class="wwwp5lsdt"/><path class="byh_7nqws"/><path class="u-58rybsd"/><path class="kgkc46ncq"/><path class="qendztx4a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:window"} {...others} />);
}

export default Component;
