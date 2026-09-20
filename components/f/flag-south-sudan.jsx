import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wism3vaym.css';
import '../../css/u/u9hq09b6k.css';
import '../../css/e/ekthx6-7i.css';
import '../../css/m/mwl13xblr.css';
import '../../css/m/moqlwkbsu.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="wism3vaym"/><path class="u9hq09b6k"/><path class="ekthx6-7i"/><path class="mwl13xblr"/><path class="moqlwkbsu"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-south-sudan"} {...others} />);
}

export default Component;
