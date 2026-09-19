import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/n/nrqfhodij.css';
import '../../css/j/j8v342ebz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGXsLnyctv"><g class="rohhhzb0l"><path class="nrqfhodij"/><path class="j8v342ebz"/></g></mask></defs><path mask="url(#SVGXsLnyctv)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:two-dimensional-code"} {...others} />);
}

export default Component;
