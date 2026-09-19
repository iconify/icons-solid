import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/adexpl72i.css';
import '../../css/o/obtq3bw8r.css';
import '../../css/t/th81deifi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGByKIDebf"><g class="adexpl72i"><path clip-rule="evenodd" class="obtq3bw8r"/><path class="th81deifi"/></g></mask></defs><path mask="url(#SVGByKIDebf)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:circle-four"} {...others} />);
}

export default Component;
