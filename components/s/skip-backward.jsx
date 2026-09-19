import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gjyw_p0_q.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="gjyw_p0_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:skip-backward"} {...others} />);
}

export default Component;
