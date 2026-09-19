import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/l/ldklbzbzw.css';
import '../../css/d/d7myvrb7j.css';
import '../../css/z/zew7e1b0p.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGUJvaJd0o"><g class="hv130ab-t"><path class="ldklbzbzw"/><path class="d7myvrb7j"/><path class="zew7e1b0p"/></g></mask></defs><path mask="url(#SVGUJvaJd0o)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:reload"} {...others} />);
}

export default Component;
