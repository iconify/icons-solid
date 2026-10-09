import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ghmcvubhp.css';
import '../../css/a/aaodd-59v.css';
import '../../css/k/kw8p-gmhn.css';
import '../../css/c/cqkk-acux.css';
import '../../css/o/oz0-7c0kb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ghmcvubhp"/><path class="aaodd-59v"/><path class="kw8p-gmhn"/><path class="cqkk-acux"/><path class="oz0-7c0kb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bus-stop-48-bold"} {...others} />);
}

export default Component;
