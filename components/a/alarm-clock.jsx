import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/n/nfpxpmyht.css';
import '../../css/q/ql9sd2bvf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG1aXMSbnJ"><g class="v3_i3wktz"><path class="nfpxpmyht"/><path class="ql9sd2bvf"/></g></mask></defs><path mask="url(#SVG1aXMSbnJ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:alarm-clock"} {...others} />);
}

export default Component;
