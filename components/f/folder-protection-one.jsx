import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/o/oxacldbke.css';
import '../../css/s/sulgn8ben.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGkKkxDexZ"><g class="aql7dnt-u"><path class="oxacldbke"/><path class="sulgn8ben"/></g></mask></defs><path mask="url(#SVGkKkxDexZ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:folder-protection-one"} {...others} />);
}

export default Component;
