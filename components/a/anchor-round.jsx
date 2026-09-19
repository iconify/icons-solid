import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/e/e9bm3i9jh.css';
import '../../css/g/gpfbbuj1p.css';
import '../../css/z/z_4r70l9a.css';
import '../../css/d/dhsxfubbd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGFWDy1bBg"><g class="aql7dnt-u"><path class="e9bm3i9jh"/><circle class="gpfbbuj1p"/><circle class="z_4r70l9a"/><circle class="dhsxfubbd"/></g></mask></defs><path mask="url(#SVGFWDy1bBg)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:anchor-round"} {...others} />);
}

export default Component;
