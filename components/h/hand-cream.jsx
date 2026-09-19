import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/k/kb9zbkb1z.css';
import '../../css/i/iw8w2sijo.css';
import '../../css/x/xo86xh92i.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGxKCs9dge"><g class="aql7dnt-u"><circle class="kb9zbkb1z"/><path class="iw8w2sijo"/><path class="xo86xh92i"/></g></mask></defs><path mask="url(#SVGxKCs9dge)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:hand-cream"} {...others} />);
}

export default Component;
