import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/r/rn062sb4o.css';
import '../../css/b/b3wd55b4b.css';
import '../../css/y/yp7rfpwnl.css';
import '../../css/s/soka6eb5z.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGUUMHjcMI"><g class="aql7dnt-u"><path class="rn062sb4o"/><path class="b3wd55b4b"/><circle class="yp7rfpwnl"/><path class="soka6eb5z"/></g></mask></defs><path mask="url(#SVGUUMHjcMI)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:passport"} {...others} />);
}

export default Component;
