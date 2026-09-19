import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/p/pz0kzybva.css';
import '../../css/j/juzlxjb7o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGGwSbob2g"><g class="v3_i3wktz"><rect class="pz0kzybva"/><path class="juzlxjb7o"/></g></mask></defs><path mask="url(#SVGGwSbob2g)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:bank-transfer"} {...others} />);
}

export default Component;
