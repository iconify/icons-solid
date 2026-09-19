import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/b/bnodaob4x.css';
import '../../css/w/wmhdlspux.css';
import '../../css/z/zw3ktw8jt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGTTivlu9X"><g class="rohhhzb0l"><path class="bnodaob4x"/><path class="wmhdlspux"/><path class="zw3ktw8jt"/></g></mask></defs><path mask="url(#SVGTTivlu9X)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:collection-records"} {...others} />);
}

export default Component;
