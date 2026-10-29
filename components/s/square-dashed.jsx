import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ie42jkbnl.css';
import '../../css/s/s2tb-y15u.css';
import '../../css/m/m_cjgobea.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ie42jkbnl wm-shadow"/><path class="s2tb-y15u wm-k"/><path class="m_cjgobea wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:square-dashed"} {...others} />);
}

export default Component;
