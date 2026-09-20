import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tdb262e9z.css';
import '../../css/s/svs9u_b2t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tdb262e9z"/><path class="svs9u_b2t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:list-ordered-line"} {...others} />);
}

export default Component;
