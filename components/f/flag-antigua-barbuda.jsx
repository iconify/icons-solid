import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jkq7-hbwz.css';
import '../../css/u/u9hq09b6k.css';
import '../../css/u/ukqcribus.css';
import '../../css/o/otq39xo5k.css';
import '../../css/q/qgfsrx38k.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="jkq7-hbwz"/><path class="u9hq09b6k"/><path class="ukqcribus"/><path class="otq39xo5k"/><path class="qgfsrx38k"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-antigua-barbuda"} {...others} />);
}

export default Component;
