import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/g/g47cb4b4t.css';
import '../../css/h/h-23ectuy.css';
import '../../css/q/qdvu_0p4y.css';
import '../../css/k/khevcpbfm.css';
import '../../css/s/ss2u9ache.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG35mb2bKj"><g class="ufeehvblu"><rect class="g47cb4b4t"/><path class="h-23ectuy"/><path class="qdvu_0p4y"/><path class="khevcpbfm"/><path class="ss2u9ache"/></g></mask></defs><path mask="url(#SVG35mb2bKj)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:inbox-upload-r"} {...others} />);
}

export default Component;
