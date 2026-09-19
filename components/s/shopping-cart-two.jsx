import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/c/caaopxbqh.css';
import '../../css/t/tuqzf_bkg.css';
import '../../css/o/oth8zfbky.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="caaopxbqh"/><circle class="tuqzf_bkg"/><circle class="oth8zfbky"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:shopping-cart-two"} {...others} />);
}

export default Component;
