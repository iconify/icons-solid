import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/k/ka1_8zbxt.css';
import '../../css/o/ooj06lbbu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGVPrCLdYG"><g class="aql7dnt-u"><path class="ka1_8zbxt"/><path class="ooj06lbbu"/></g></mask></defs><path mask="url(#SVGVPrCLdYG)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:rotation-one"} {...others} />);
}

export default Component;
