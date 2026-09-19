import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/f/fv9af5lgc.css';
import '../../css/i/i9l44ts8o.css';
import '../../css/a/ac9k9ew8y.css';
import '../../css/q/q9dknlojm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG5bXk0bUg"><g class="aql7dnt-u"><path class="fv9af5lgc"/><path class="i9l44ts8o"/><path class="ac9k9ew8y"/><path class="q9dknlojm"/></g></mask></defs><path mask="url(#SVG5bXk0bUg)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:network-tree"} {...others} />);
}

export default Component;
