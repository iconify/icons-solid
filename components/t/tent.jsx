import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/q/q_2m_xbrx.css';
import '../../css/z/z1jwvkgas.css';
import '../../css/y/y3z90mb8g.css';
import '../../css/r/r6femfb0m.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGScXhYdjV"><g class="wwvp95byt"><path class="q_2m_xbrx"/><path class="z1jwvkgas"/><path class="y3z90mb8g"/><path class="r6femfb0m"/></g></mask></defs><path mask="url(#SVGScXhYdjV)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:tent"} {...others} />);
}

export default Component;
