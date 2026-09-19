import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lhj0lixiu.css';
import '../../css/t/ti90qacav.css';
import '../../css/z/z7bc25blt.css';
import '../../css/h/h1t7juz9u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lhj0lixiu"/><path class="ti90qacav"/><path class="z7bc25blt"/><path class="h1t7juz9u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:file-close-duotone"} {...others} />);
}

export default Component;
