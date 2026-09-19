import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/y/yhijrzbpl.css';
import '../../css/n/ntpl6vmcs.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGNAT4GFHK"><g class="aql7dnt-u"><path class="yhijrzbpl"/><path class="ntpl6vmcs"/></g></mask></defs><path mask="url(#SVGNAT4GFHK)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:pull-door"} {...others} />);
}

export default Component;
