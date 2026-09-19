import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/b/bnk-_vbtx.css';
import '../../css/d/d7ovo-w3p.css';
import '../../css/w/w9x8kzbyj.css';
import '../../css/v/v1_9a1bkq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGrQ0tDbpJ"><g class="rohhhzb0l"><path class="bnk-_vbtx"/><path class="d7ovo-w3p"/><path class="w9x8kzbyj"/><path class="v1_9a1bkq"/></g></mask></defs><path mask="url(#SVGrQ0tDbpJ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:reel"} {...others} />);
}

export default Component;
