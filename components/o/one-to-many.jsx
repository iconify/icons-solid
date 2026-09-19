import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/r/r-8dawoyr.css';
import '../../css/l/l5tcc9b-l.css';
import '../../css/y/ya-s0pbbq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGKSbZykmm"><g class="rohhhzb0l"><path class="r-8dawoyr"/><path class="l5tcc9b-l"/><path class="ya-s0pbbq"/></g></mask></defs><path mask="url(#SVGKSbZykmm)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:one-to-many"} {...others} />);
}

export default Component;
