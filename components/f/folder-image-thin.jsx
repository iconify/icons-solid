import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/p/peniq4-zy.css';
import '../../css/h/h_9tkub7q.css';
import '../../css/z/ztimj1q5g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="peniq4-zy"/><path class="h_9tkub7q"/><path class="ztimj1q5g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:folder-image-thin"} {...others} />);
}

export default Component;
