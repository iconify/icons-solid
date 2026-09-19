import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dr9w9cuwd.css';
import '../../css/u/umljw05vc.css';
import '../../css/k/k0zklwbhr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dr9w9cuwd"/><path class="umljw05vc"/><path class="k0zklwbhr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:vault"} {...others} />);
}

export default Component;
