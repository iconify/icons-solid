import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o641qdqhk.css';
import '../../css/b/bjhykb3jv.css';
import '../../css/m/mr2tuebwd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="o641qdqhk"/><path class="bjhykb3jv"/><path class="mr2tuebwd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:outbox"} {...others} />);
}

export default Component;
