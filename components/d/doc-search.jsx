import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gf-vx5btw.css';
import '../../css/q/q_7vfqb-s.css';
import '../../css/b/bpg8_fb4j.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGLoxIgeNb"><g class="ft5dv1b6b"><path class="gf-vx5btw"/><path class="q_7vfqb-s"/><path class="bpg8_fb4j"/></g></mask></defs><path mask="url(#SVGLoxIgeNb)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:doc-search"} {...others} />);
}

export default Component;
