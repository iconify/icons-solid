import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pvfb504fx.css';
import '../../css/q/q4m_045yy.css';
import '../../css/d/dq7c41azz.css';
import '../../css/a/a7ql9qt_c.css';
import '../../css/u/u_-krv67s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pvfb504fx wm-shadow"/><path class="q4m_045yy wm-k"/><path class="dq7c41azz wm-k"/><path class="a7ql9qt_c wm-a"/><path class="u_-krv67s wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:code-xml"} {...others} />);
}

export default Component;
