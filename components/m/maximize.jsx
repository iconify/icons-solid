import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/uarzt5bwz.css';
import '../../css/h/hj0slhgcd.css';
import '../../css/e/edmqrneld.css';
import '../../css/a/aq4c_bbme.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="uarzt5bwz wm-shadow"/><path class="hj0slhgcd wm-shadow"/><path class="edmqrneld"/><path class="aq4c_bbme"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:maximize"} {...others} />);
}

export default Component;
