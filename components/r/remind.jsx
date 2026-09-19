import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u4oaxne3c.css';
import '../../css/g/gvjpz8u1b.css';
import '../../css/m/mpkpkxm1l.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG8E7KcdND"><g class="ft5dv1b6b"><path class="u4oaxne3c"/><path class="gvjpz8u1b"/><path class="mpkpkxm1l"/></g></mask></defs><path mask="url(#SVG8E7KcdND)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:remind"} {...others} />);
}

export default Component;
