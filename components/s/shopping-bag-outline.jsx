import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g_9m_3b3d.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="g_9m_3b3d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:shopping-bag-outline"} {...others} />);
}

export default Component;
