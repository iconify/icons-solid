import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/i/ipngrjbif.css';
import '../../css/r/r22my0kcs.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGFf3hjcGv"><g class="v3_i3wktz"><path class="ipngrjbif"/><path class="r22my0kcs"/></g></mask></defs><path mask="url(#SVGFf3hjcGv)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:massage-table"} {...others} />);
}

export default Component;
