import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/usmo0gbrf.css';
import '../../css/t/tvepgg8ps.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="usmo0gbrf"/><path class="tvepgg8ps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:right-arrow"} {...others} />);
}

export default Component;
