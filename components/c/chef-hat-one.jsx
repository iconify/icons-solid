import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/n/nfkg47b9j.css';
import '../../css/r/rr86q_70g.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGQA0tA7Oz"><g class="aql7dnt-u"><path class="nfkg47b9j"/><path class="rr86q_70g"/></g></mask></defs><path mask="url(#SVGQA0tA7Oz)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:chef-hat-one"} {...others} />);
}

export default Component;
