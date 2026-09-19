import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/n/nhyselmex.css';
import '../../css/z/zz2wdgb5t.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGy4MFPdRp"><g class="aql7dnt-u"><path class="nhyselmex"/><path class="zz2wdgb5t"/></g></mask></defs><path mask="url(#SVGy4MFPdRp)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:bowl"} {...others} />);
}

export default Component;
