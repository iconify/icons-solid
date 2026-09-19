import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/z/zoqhftbbw.css';
import '../../css/a/ac4w5bc3l.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGkmrbQeMA"><g class="rohhhzb0l"><path class="zoqhftbbw"/><path class="ac4w5bc3l"/></g></mask></defs><path mask="url(#SVGkmrbQeMA)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:notepad"} {...others} />);
}

export default Component;
