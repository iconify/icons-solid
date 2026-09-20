import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d_q6p6bet.css';
import '../../css/v/vo_do-qpe.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="d_q6p6bet"/><path class="vo_do-qpe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:bluesky"} {...others} />);
}

export default Component;
