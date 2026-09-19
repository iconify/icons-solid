import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/j/jm2q-_s5p.css';
import '../../css/v/vyaruxbrv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGXSq9SH3E"><g class="aql7dnt-u"><path class="jm2q-_s5p"/><path class="vyaruxbrv"/></g></mask></defs><path mask="url(#SVGXSq9SH3E)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:conditioner"} {...others} />);
}

export default Component;
