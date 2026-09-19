import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/i/iirreabjs.css';
import '../../css/z/zuxintbbc.css';
import '../../css/u/ux16ifpyr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG7OE4eeoM"><g class="rohhhzb0l"><path class="iirreabjs"/><path class="zuxintbbc"/><path class="ux16ifpyr"/></g></mask></defs><path mask="url(#SVG7OE4eeoM)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:lamp"} {...others} />);
}

export default Component;
