import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q1v07ne6d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q1v07ne6d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:paper-bag-crumpled"} {...others} />);
}

export default Component;
