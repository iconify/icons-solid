import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp-6ebbmc.css';
import '../../css/l/ljs5lpfqk.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="gp-6ebbmc"/><path class="ljs5lpfqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:up-arrow"} {...others} />);
}

export default Component;
