import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/e/e72qrbbxo.css';
import '../../css/n/ne4zzcnnq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGB9IqhatS"><g class="aql7dnt-u"><path class="e72qrbbxo"/><path class="ne4zzcnnq"/></g></mask></defs><path mask="url(#SVGB9IqhatS)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:level"} {...others} />);
}

export default Component;
