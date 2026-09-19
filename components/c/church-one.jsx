import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/c/cslsnsbdo.css';
import '../../css/d/daj4drb4a.css';
import '../../css/j/j9hg1or3h.css';
import '../../css/x/xy4oztbow.css';
import '../../css/t/tt3n4ibfb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG0m6Redsh"><g class="rohhhzb0l"><path class="cslsnsbdo"/><path class="daj4drb4a"/><path class="j9hg1or3h"/><path class="xy4oztbow"/><path class="tt3n4ibfb"/></g></mask></defs><path mask="url(#SVG0m6Redsh)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:church-one"} {...others} />);
}

export default Component;
