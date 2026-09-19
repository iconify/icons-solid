import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/p/p68ubgbhu.css';
import '../../css/v/vat1s__tx.css';
import '../../css/n/nk4ez9z6n.css';
import '../../css/v/vo0dggbrk.css';
import '../../css/w/ww5-o3blo.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGtRDOocPC"><g class="rohhhzb0l"><circle class="p68ubgbhu"/><circle class="vat1s__tx"/><circle class="nk4ez9z6n"/><circle class="vo0dggbrk"/><path class="ww5-o3blo"/></g></mask></defs><path mask="url(#SVGtRDOocPC)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:tree-diagram"} {...others} />);
}

export default Component;
