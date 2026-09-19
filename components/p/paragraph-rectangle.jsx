import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/k/k-t__0bsb.css';
import '../../css/v/vm5qpsucm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGQzOebvec"><g class="aql7dnt-u"><path class="k-t__0bsb"/><path class="vm5qpsucm"/></g></mask></defs><path mask="url(#SVGQzOebvec)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:paragraph-rectangle"} {...others} />);
}

export default Component;
