import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bdrln12nc.css';
import '../../css/d/dwglqebtk.css';
import '../../css/p/pgml1ac6f.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGdpIL6bIz"><g class="ft5dv1b6b"><path class="bdrln12nc"/><path class="dwglqebtk"/><path class="pgml1ac6f"/></g></mask></defs><path mask="url(#SVGdpIL6bIz)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:hard-disk"} {...others} />);
}

export default Component;
