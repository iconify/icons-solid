import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/i/if55a7bnz.css';
import '../../css/l/l2t9bkdqd.css';
import '../../css/h/hd1iybcfi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGogt14dTY"><g class="rohhhzb0l"><path class="if55a7bnz"/><path clip-rule="evenodd" class="l2t9bkdqd"/><path class="hd1iybcfi"/></g></mask></defs><path mask="url(#SVGogt14dTY)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:file-pdf"} {...others} />);
}

export default Component;
