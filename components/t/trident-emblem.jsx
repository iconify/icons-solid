import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hqqcd7bya.css';
import '../../css/g/ghnrm6ksq.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="hqqcd7bya"/><path class="ghnrm6ksq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:trident-emblem"} {...others} />);
}

export default Component;
