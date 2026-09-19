import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nm_i66_ym.css';
import '../../css/o/ojwmqkoww.css';
import '../../css/x/xrhdcypyq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nm_i66_ym"/><path class="ojwmqkoww"/><path class="xrhdcypyq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:persistent-disk"} {...others} />);
}

export default Component;
