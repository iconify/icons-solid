import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/m/mnzhnhbdm.css';
import '../../css/i/iehr1opfa.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGWhrNKdWS"><g class="aql7dnt-u"><path class="mnzhnhbdm"/><path class="iehr1opfa"/></g></mask></defs><path mask="url(#SVGWhrNKdWS)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:high-heeled-shoes"} {...others} />);
}

export default Component;
