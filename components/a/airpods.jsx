import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/ug9dlpt4z.css';
import '../../css/v/vbcj9_ast.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGIaqqgbgm"><g class="aql7dnt-u"><path class="ug9dlpt4z"/><path class="vbcj9_ast"/></g></mask></defs><path mask="url(#SVGIaqqgbgm)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:airpods"} {...others} />);
}

export default Component;
