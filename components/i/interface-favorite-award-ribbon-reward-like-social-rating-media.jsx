import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/wt9mfjbeb.css';
import '../../css/c/cmgpsgvbe.css';
import '../../css/z/zcuddm6rv.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><circle class="wt9mfjbeb"/><circle class="cmgpsgvbe"/><path class="zcuddm6rv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-favorite-award-ribbon-reward-like-social-rating-media"} {...others} />);
}

export default Component;
