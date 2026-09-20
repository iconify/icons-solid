import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xfkgk1l5g.css';
import '../../css/u/ugxf3ybrs.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="xfkgk1l5g"/><path class="ugxf3ybrs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:anchor"} {...others} />);
}

export default Component;
