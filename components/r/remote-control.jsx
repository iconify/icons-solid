import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/b/beu9ed8lh.css';
import '../../css/k/ktbh9sb3d.css';
import '../../css/u/ubuxeu1xf.css';
import '../../css/a/a3je19_hn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGivwRji0P"><g class="rohhhzb0l"><rect class="beu9ed8lh"/><circle class="ktbh9sb3d"/><path class="ubuxeu1xf"/><path class="a3je19_hn"/></g></mask></defs><path mask="url(#SVGivwRji0P)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:remote-control"} {...others} />);
}

export default Component;
