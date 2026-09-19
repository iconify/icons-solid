import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/e/emo24lblh.css';
import '../../css/z/zq1txsbbf.css';
import '../../css/q/qw1suyb4s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGmYwtObAk"><g class="rohhhzb0l"><circle class="emo24lblh"/><circle class="zq1txsbbf"/><path class="qw1suyb4s"/></g></mask></defs><path mask="url(#SVGmYwtObAk)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:gauze"} {...others} />);
}

export default Component;
