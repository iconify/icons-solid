import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vf5b9zb0i.css';
import '../../css/c/cxauthb-e.css';
import '../../css/m/mkkfhejzs.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/u/u9aexgktk.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="vf5b9zb0i"><circle class="cxauthb-e"/><path class="mkkfhejzs"/></g><g class="x8poo_bjf"><circle class="cxauthb-e"/><path class="u9aexgktk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:man-dancing-medium-dark-skin-tone"} {...others} />);
}

export default Component;
