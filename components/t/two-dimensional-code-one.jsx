import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/d/djw3_hbes.css';
import '../../css/n/n98ciob7o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGJptIlbHs"><g class="rohhhzb0l"><path class="djw3_hbes"/><path class="n98ciob7o"/></g></mask></defs><path mask="url(#SVGJptIlbHs)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:two-dimensional-code-one"} {...others} />);
}

export default Component;
