import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/t/tt034pnuf.css';
import '../../css/i/iy93embyp.css';
import '../../css/h/h77qjobjk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG0QMU2z0O"><g class="aql7dnt-u"><circle class="tt034pnuf"/><circle class="iy93embyp"/><path class="h77qjobjk"/></g></mask></defs><path mask="url(#SVG0QMU2z0O)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:transform"} {...others} />);
}

export default Component;
