import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a33b94myo.css';
import '../../css/o/o08jojm8w.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="a33b94myo"/><path class="o08jojm8w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:angle-double-up"} {...others} />);
}

export default Component;
