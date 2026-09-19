import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/t/t1-uyccej.css';
import '../../css/h/hym5wwcis.css';
import '../../css/e/ewd5e-bwq.css';
import '../../css/m/mwarud2al.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGJlIPmcZR"><g class="wwvp95byt"><path class="t1-uyccej"/><path class="hym5wwcis"/><path class="ewd5e-bwq"/><path class="mwarud2al"/></g></mask></defs><path mask="url(#SVGJlIPmcZR)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:goblet-cracking"} {...others} />);
}

export default Component;
