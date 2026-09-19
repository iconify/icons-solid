import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/m/mho5o29zz.css';
import '../../css/c/cx-drzi7n.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGhevevcOk"><g class="aql7dnt-u"><path class="mho5o29zz"/><path class="cx-drzi7n"/></g></mask></defs><path mask="url(#SVGhevevcOk)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:graphic-stitching-three"} {...others} />);
}

export default Component;
