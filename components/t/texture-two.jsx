import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/e/evhwi6eat.css';
import '../../css/c/czt218btr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG1xEjacUz"><g class="aql7dnt-u"><path class="evhwi6eat"/><path class="czt218btr"/></g></mask></defs><path mask="url(#SVG1xEjacUz)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:texture-two"} {...others} />);
}

export default Component;
