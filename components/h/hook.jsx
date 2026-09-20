import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkbw6_bzt.css';
import '../../css/t/toym7nb7v.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="dkbw6_bzt"/><path class="toym7nb7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:hook"} {...others} />);
}

export default Component;
