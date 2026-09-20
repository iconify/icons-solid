import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u8ttspegr.css';
import '../../css/v/v2yh4c2xt.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="u8ttspegr"/><path class="v2yh4c2xt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:raising-hands"} {...others} />);
}

export default Component;
