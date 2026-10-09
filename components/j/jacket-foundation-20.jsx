import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uphte4bua.css';
import '../../css/w/wcqmlfg5a.css';
import '../../css/l/l2w1qhbgy.css';
import '../../css/c/c3xzvutzh.css';
import '../../css/l/lj_74133m.css';
import '../../css/d/dy8mjytec.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="uphte4bua"/><path class="wcqmlfg5a"/><path class="l2w1qhbgy"/><path class="c3xzvutzh"/><path class="lj_74133m"/><path class="dy8mjytec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:jacket-foundation-20"} {...others} />);
}

export default Component;
