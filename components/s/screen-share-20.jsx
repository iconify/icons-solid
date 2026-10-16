import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bqxty8b1p.css';
import '../../css/k/kvl9ucc0s.css';
import '../../css/p/p1_r36byr.css';
import '../../css/w/wx3unnb0j.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bqxty8b1p"/><path class="kvl9ucc0s"/><path class="p1_r36byr"/><path class="wx3unnb0j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:screen-share-20"} {...others} />);
}

export default Component;
