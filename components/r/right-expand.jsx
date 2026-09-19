import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/k/kieu5bcnf.css';
import '../../css/n/ngen0gb1d.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG5u2Fgb3A"><g class="aql7dnt-u"><rect class="kieu5bcnf"/><path class="ngen0gb1d"/></g></mask></defs><path mask="url(#SVG5u2Fgb3A)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:right-expand"} {...others} />);
}

export default Component;
