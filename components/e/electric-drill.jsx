import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/j/j7bu-3b9t.css';
import '../../css/z/z7d0d0-5k.css';
import '../../css/d/d7m_sfb3s.css';
import '../../css/i/izth8wb4y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="j7bu-3b9t"/><path class="z7d0d0-5k"/><rect class="d7m_sfb3s"/><path class="izth8wb4y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:electric-drill"} {...others} />);
}

export default Component;
