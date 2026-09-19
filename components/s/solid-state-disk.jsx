import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bdrln12nc.css';
import '../../css/d/dwglqebtk.css';
import '../../css/p/pgml1ac6f.css';
import '../../css/z/zy0ot5bfm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGQWXtvdGd"><g class="ft5dv1b6b"><path class="bdrln12nc"/><path class="dwglqebtk"/><path class="pgml1ac6f"/><path class="zy0ot5bfm"/></g></mask></defs><path mask="url(#SVGQWXtvdGd)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:solid-state-disk"} {...others} />);
}

export default Component;
