import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/o/orh3r4b-h.css';
import '../../css/t/tskwdnsgg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGdNrxObko"><g class="rohhhzb0l"><rect class="orh3r4b-h"/><path class="tskwdnsgg"/></g></mask></defs><path mask="url(#SVGdNrxObko)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:plug-one"} {...others} />);
}

export default Component;
