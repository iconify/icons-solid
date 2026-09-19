import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/e/enddguneu.css';
import '../../css/b/bwaukbb3s.css';
import '../../css/c/c4-ix0aca.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGRiMS8beK"><g class="ufeehvblu"><path class="enddguneu"/><path class="bwaukbb3s"/><path class="c4-ix0aca"/></g></mask></defs><path mask="url(#SVGRiMS8beK)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:thermometer"} {...others} />);
}

export default Component;
