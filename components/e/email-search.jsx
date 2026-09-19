import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/c/c_4c5cc2r.css';
import '../../css/b/b0x58bbti.css';
import '../../css/o/outxdn7yt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG7VfDrcmB"><g class="rohhhzb0l"><path class="c_4c5cc2r"/><circle class="b0x58bbti"/><path class="outxdn7yt"/></g></mask></defs><path mask="url(#SVG7VfDrcmB)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:email-search"} {...others} />);
}

export default Component;
