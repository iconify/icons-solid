import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c4g9c6bca.css';
import '../../css/p/prks0ukbo.css';
import '../../css/r/rod9hkbdu.css';
import '../../css/f/fxzrjioav.css';
import '../../css/r/rlachkb9o.css';
import '../../css/x/xzl89uk0h.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG2YbnhcjV"><g class="ft5dv1b6b"><path class="c4g9c6bca"/><ellipse class="prks0ukbo"/><circle class="rod9hkbdu"/><circle class="fxzrjioav"/><circle class="rlachkb9o"/><circle class="xzl89uk0h"/></g></mask></defs><path mask="url(#SVG2YbnhcjV)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:pig"} {...others} />);
}

export default Component;
