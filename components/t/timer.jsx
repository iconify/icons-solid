import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/x/x1fhckaoa.css';
import '../../css/f/f80ucki7e.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGQqiRNbrS"><g class="rohhhzb0l"><circle class="x1fhckaoa"/><path class="f80ucki7e"/></g></mask></defs><path mask="url(#SVGQqiRNbrS)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:timer"} {...others} />);
}

export default Component;
