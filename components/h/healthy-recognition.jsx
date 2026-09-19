import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/r/rm8wk1b8h.css';
import '../../css/l/lxnreqban.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGrcy0SrOm"><g class="aql7dnt-u"><path class="rm8wk1b8h"/><path class="lxnreqban"/></g></mask></defs><path mask="url(#SVGrcy0SrOm)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:healthy-recognition"} {...others} />);
}

export default Component;
