import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/z/zqktypdwy.css';
import '../../css/u/ufal36mvs.css';
import '../../css/k/k47fxrb9v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow zqktypdwy"/><path class="ufal36mvs wm-shadow"/><path class="k47fxrb9v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:podcast"} {...others} />);
}

export default Component;
