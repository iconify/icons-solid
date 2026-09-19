import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/f/f3xnzb_sh.css';
import '../../css/g/g-a3yvbzf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGfQPYedKa"><g class="rohhhzb0l"><rect class="f3xnzb_sh"/><path class="g-a3yvbzf"/></g></mask></defs><path mask="url(#SVGfQPYedKa)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:ipad"} {...others} />);
}

export default Component;
