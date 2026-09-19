import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ncyj44b5x.css';
import '../../css/f/ff2fwvbbo.css';
import '../../css/y/ywn-6ab3x.css';
import '../../css/a/a1gq_7yoi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGYqRkFdNj"><g class="ft5dv1b6b"><path class="ncyj44b5x"/><path class="ff2fwvbbo"/><path class="ywn-6ab3x"/><path clip-rule="evenodd" class="a1gq_7yoi"/></g></mask></defs><path mask="url(#SVGYqRkFdNj)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:file-question"} {...others} />);
}

export default Component;
