import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hxxz6v6tu.css';
import '../../css/c/cywfgac-b.css';
import '../../css/r/r4p2n8e5i.css';
import '../../css/x/x-5eupbib.css';
import '../../css/q/qdq775cfd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGHYOHcdBq"><g class="ft5dv1b6b"><path class="hxxz6v6tu"/><path clip-rule="evenodd" class="cywfgac-b"/><path class="r4p2n8e5i"/><path clip-rule="evenodd" class="x-5eupbib"/><path class="qdq775cfd"/></g></mask></defs><path mask="url(#SVGHYOHcdBq)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:dislike-two"} {...others} />);
}

export default Component;
