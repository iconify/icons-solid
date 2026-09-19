import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/u1qtw7b2b.css';
import '../../css/y/y165n9bjs.css';
import '../../css/q/qqpblxf5z.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGsiQHC98x"><g class="aql7dnt-u"><path class="u1qtw7b2b"/><path class="y165n9bjs"/><path class="qqpblxf5z"/></g></mask></defs><path mask="url(#SVGsiQHC98x)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:stethoscope"} {...others} />);
}

export default Component;
