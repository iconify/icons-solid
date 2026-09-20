import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r3jglccvf.css';
import '../../css/c/cuikm_bqp.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="r3jglccvf"/><path class="cuikm_bqp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:arrow-turn-right"} {...others} />);
}

export default Component;
