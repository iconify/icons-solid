import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/l/l7glbwcru.css';
import '../../css/w/wkfxevblu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG4IxzvcIZ"><g class="aql7dnt-u"><path class="l7glbwcru"/><path class="wkfxevblu"/></g></mask></defs><path mask="url(#SVG4IxzvcIZ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:success"} {...others} />);
}

export default Component;
