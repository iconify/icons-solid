import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k863ckb4g.css';
import '../../css/l/l5ybookek.css';
import '../../css/s/sqn_l5bdy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="k863ckb4g"/><path class="l5ybookek"/><path class="sqn_l5bdy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pipe-elbow-20"} {...others} />);
}

export default Component;
