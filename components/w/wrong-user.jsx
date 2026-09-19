import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/e/e_iwscbqa.css';
import '../../css/o/o452wi0jp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGCIZk6d3F"><g class="aql7dnt-u"><circle class="e_iwscbqa"/><path class="o452wi0jp"/></g></mask></defs><path mask="url(#SVGCIZk6d3F)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:wrong-user"} {...others} />);
}

export default Component;
