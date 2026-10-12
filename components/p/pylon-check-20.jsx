import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tev8fjt6v.css';
import '../../css/w/wnj4gh3ih.css';
import '../../css/v/v82746bqh.css';
import '../../css/a/a23ibfbrs.css';
import '../../css/l/l_5jk4b2p.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tev8fjt6v"/><path class="wnj4gh3ih"/><path class="v82746bqh"/><path class="a23ibfbrs"/><path class="l_5jk4b2p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pylon-check-20"} {...others} />);
}

export default Component;
