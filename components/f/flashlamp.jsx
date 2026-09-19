import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/a/a_ete1bey.css';
import '../../css/l/l3yvqyb3n.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGmFZ5WbDH"><g class="rohhhzb0l"><circle class="a_ete1bey"/><path class="l3yvqyb3n"/></g></mask></defs><path mask="url(#SVGmFZ5WbDH)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:flashlamp"} {...others} />);
}

export default Component;
