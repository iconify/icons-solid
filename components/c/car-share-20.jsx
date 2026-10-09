import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nr06inifp.css';
import '../../css/d/djivw-b_v.css';
import '../../css/m/mcybd2bqr.css';
import '../../css/f/fk-qttrqm.css';
import '../../css/l/l053p9k0q.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nr06inifp"/><path class="djivw-b_v"/><path class="mcybd2bqr"/><path class="fk-qttrqm"/><path class="l053p9k0q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:car-share-20"} {...others} />);
}

export default Component;
