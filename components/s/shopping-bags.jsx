import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uexuiinxx.css';
import '../../css/v/vi7of3bpv.css';
import '../../css/g/guzqa6bjs.css';
import '../../css/g/g7lf7dbjc.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="uexuiinxx"/><path class="vi7of3bpv"/><path class="guzqa6bjs"/><path class="g7lf7dbjc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:shopping-bags"} {...others} />);
}

export default Component;
