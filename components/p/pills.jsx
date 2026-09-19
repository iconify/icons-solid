import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/a/angv19bzs.css';
import '../../css/q/qqnj1mcie.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGkJmMtcqn"><g class="rohhhzb0l"><path clip-rule="evenodd" class="angv19bzs"/><path class="qqnj1mcie"/></g></mask></defs><path mask="url(#SVGkJmMtcqn)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:pills"} {...others} />);
}

export default Component;
