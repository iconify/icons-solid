import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_1_ebbny.css';

const viewBox = {"width":2080,"height":1504};
const content = `<path class="n_1_ebbny"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:timeslots"} {...others} />);
}

export default Component;
