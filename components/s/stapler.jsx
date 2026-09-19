import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/f/fm3ditb9p.css';
import '../../css/t/tmp9efbjl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGq4AOPEzN"><g class="rohhhzb0l"><path class="fm3ditb9p"/><circle class="tmp9efbjl"/></g></mask></defs><path mask="url(#SVGq4AOPEzN)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:stapler"} {...others} />);
}

export default Component;
