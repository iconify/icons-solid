import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/c/cmtf-dnpo.css';
import '../../css/f/f95my6llm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG1TJ0NSpq"><g class="v3_i3wktz"><path class="cmtf-dnpo"/><path class="f95my6llm"/></g></mask></defs><path mask="url(#SVG1TJ0NSpq)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:vial"} {...others} />);
}

export default Component;
