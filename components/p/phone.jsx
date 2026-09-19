import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/a/ac7wvmh5x.css';
import '../../css/w/w8j8x2b3h.css';
import '../../css/g/gs_5-gc9x.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGCQzDUcoZ"><g class="rohhhzb0l"><path class="ac7wvmh5x"/><path class="w8j8x2b3h"/><path class="gs_5-gc9x"/></g></mask></defs><path mask="url(#SVGCQzDUcoZ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:phone"} {...others} />);
}

export default Component;
