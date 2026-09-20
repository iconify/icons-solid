import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z-f53ebvb.css';
import '../../css/r/r8o5bwx5v.css';

const viewBox = {"width":72,"height":72};
const content = `<rect class="z-f53ebvb"/><path class="r8o5bwx5v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:stop-button"} {...others} />);
}

export default Component;
