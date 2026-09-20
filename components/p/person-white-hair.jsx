import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/avpk_juuj.css';
import '../../css/e/et6voybrv.css';
import '../../css/p/prnbm0bhn.css';
import '../../css/u/uzuqrzw6n.css';
import '../../css/j/j6hawpz5m.css';
import '../../css/p/pajctb-_b.css';
import '../../css/y/yncmw5qii.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="avpk_juuj"/><path class="et6voybrv"/><path class="prnbm0bhn"/><path class="uzuqrzw6n"/><path class="j6hawpz5m"/><path class="pajctb-_b"/><path class="yncmw5qii"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:person-white-hair"} {...others} />);
}

export default Component;
