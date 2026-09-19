import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gechpxc7u.css';
import '../../css/s/so94mnblz.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="gechpxc7u"/><path class="so94mnblz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:bulldozer"} {...others} />);
}

export default Component;
