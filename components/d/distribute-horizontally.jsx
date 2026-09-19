import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/y/yr9irdb6u.css';
import '../../css/i/iulnlabex.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGAq9RzluT"><g class="v3_i3wktz"><path class="yr9irdb6u"/><path class="iulnlabex"/></g></mask></defs><path mask="url(#SVGAq9RzluT)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:distribute-horizontally"} {...others} />);
}

export default Component;
