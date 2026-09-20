import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/b/b4dyhhbeb.css';
import '../../css/n/n8qh-cn0s.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVG2GlueH5m"><g class="k2u665ban"><circle class="b4dyhhbeb"/><path class="n8qh-cn0s"/></g></mask></defs><path mask="url(#SVG2GlueH5m)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:magnifer-zoom-in-line-duotone"} {...others} />);
}

export default Component;
