import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j1p2s7bsm.css';
import '../../css/g/gb7xzgbil.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j1p2s7bsm"/><path class="gb7xzgbil"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:calender"} {...others} />);
}

export default Component;
