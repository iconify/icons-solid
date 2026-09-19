import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/a/a7adl4bny.css';
import '../../css/e/ez_zj8b4g.css';
import '../../css/a/arg04jbjn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG2nJRFwcp"><g class="rohhhzb0l"><path class="a7adl4bny"/><path class="ez_zj8b4g"/><path class="arg04jbjn"/></g></mask></defs><path mask="url(#SVG2nJRFwcp)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:facial-mask"} {...others} />);
}

export default Component;
