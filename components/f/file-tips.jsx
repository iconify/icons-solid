import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ncyj44b5x.css';
import '../../css/f/ff2fwvbbo.css';
import '../../css/w/wkw5ubzax.css';
import '../../css/a/a1gq_7yoi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGnZ9PAwFo"><g class="ft5dv1b6b"><path class="ncyj44b5x"/><path class="ff2fwvbbo"/><path class="wkw5ubzax"/><path clip-rule="evenodd" class="a1gq_7yoi"/></g></mask></defs><path mask="url(#SVGnZ9PAwFo)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:file-tips"} {...others} />);
}

export default Component;
