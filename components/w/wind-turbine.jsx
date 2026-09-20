import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hnj_f4vdk.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="hnj_f4vdk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:wind-turbine"} {...others} />);
}

export default Component;
