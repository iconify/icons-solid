import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ycy_tv9yp.css';
import '../../css/n/n5h7sdi6r.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ycy_tv9yp"/><path class="n5h7sdi6r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:golang"} {...others} />);
}

export default Component;
