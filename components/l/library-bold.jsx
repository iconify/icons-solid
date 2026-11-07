import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c3_gtob6t.css';
import '../../css/p/p9-9dkipc.css';
import '../../css/u/u4839bbhx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c3_gtob6t"/><path class="p9-9dkipc"/><path clip-rule="evenodd" class="u4839bbhx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:library-bold"} {...others} />);
}

export default Component;
