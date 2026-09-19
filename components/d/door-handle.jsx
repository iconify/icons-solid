import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/e/eme4c3hbl.css';
import '../../css/g/grjaxzi4b.css';
import '../../css/i/i8l5-bctd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGdJvt4dLq"><g class="aql7dnt-u"><rect class="eme4c3hbl"/><path class="grjaxzi4b"/><path class="i8l5-bctd"/></g></mask></defs><path mask="url(#SVGdJvt4dLq)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:door-handle"} {...others} />);
}

export default Component;
