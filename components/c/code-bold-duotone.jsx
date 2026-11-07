import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w2emkyb0z.css';
import '../../css/e/eg843s-3q.css';
import '../../css/b/bm7srd-6b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w2emkyb0z"/><path class="eg843s-3q"/><path class="bm7srd-6b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:code-bold-duotone"} {...others} />);
}

export default Component;
