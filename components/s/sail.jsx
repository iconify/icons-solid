import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h_c6_8sjt.css';
import '../../css/s/s7dk4dcvy.css';
import '../../css/a/avfsq0dqv.css';
import '../../css/x/x21dsqgmr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h_c6_8sjt"/><path class="s7dk4dcvy"/><path class="avfsq0dqv"/><path class="x21dsqgmr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:sail"} {...others} />);
}

export default Component;
