import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_736ebfb.css';
import '../../css/w/w0poz4bns.css';
import '../../css/c/c2cej4bnh.css';
import '../../css/u/uksk150fh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="k_736ebfb"/><path class="w0poz4bns"/><path class="c2cej4bnh"/><path class="uksk150fh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:screen-share-20-bold"} {...others} />);
}

export default Component;
