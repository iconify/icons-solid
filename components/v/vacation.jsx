import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/p/pjj5hcb0g.css';
import '../../css/w/wrqafjrbc.css';
import '../../css/g/gs4zh9bym.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGxh5Aod9y"><g class="aql7dnt-u"><path class="pjj5hcb0g"/><path class="wrqafjrbc"/><path class="gs4zh9bym"/></g></mask></defs><path mask="url(#SVGxh5Aod9y)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:vacation"} {...others} />);
}

export default Component;
