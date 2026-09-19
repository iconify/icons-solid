import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/a/am-v96rjj.css';
import '../../css/z/zp9ikpfsf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGY02aebEh"><g class="aql7dnt-u"><path class="am-v96rjj"/><path class="zp9ikpfsf"/></g></mask></defs><path mask="url(#SVGY02aebEh)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:chopping-board"} {...others} />);
}

export default Component;
