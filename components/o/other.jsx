import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/a/ay2w_abpx.css';
import '../../css/i/im606fb2m.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGjZrYZb2x"><g class="rohhhzb0l"><path class="ay2w_abpx"/><path class="im606fb2m"/></g></mask></defs><path mask="url(#SVGjZrYZb2x)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:other"} {...others} />);
}

export default Component;
