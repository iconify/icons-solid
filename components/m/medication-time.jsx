import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/a/aew_ogbkx.css';
import '../../css/q/qz-mrebrm.css';
import '../../css/t/tgxo-cukz.css';
import '../../css/w/w7__z0ipt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGAvjqkccx"><g class="rohhhzb0l"><rect class="aew_ogbkx"/><path class="qz-mrebrm"/><circle class="tgxo-cukz"/><path class="w7__z0ipt"/></g></mask></defs><path mask="url(#SVGAvjqkccx)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:medication-time"} {...others} />);
}

export default Component;
