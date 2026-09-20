import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nt9qxsw3v.css';
import '../../css/x/x4u8pbwjc.css';
import '../../css/j/jn8qy4bru.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVG6rlJ3iKi" class="nt9qxsw3v"/></defs><use href="#SVG6rlJ3iKi" class="x4u8pbwjc"/><use href="#SVG6rlJ3iKi" class="jn8qy4bru"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:open-hands"} {...others} />);
}

export default Component;
