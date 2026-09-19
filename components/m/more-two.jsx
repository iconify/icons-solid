import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x36h_kb1w.css';
import '../../css/p/p55tn28js.css';
import '../../css/o/o1ec32b0j.css';
import '../../css/v/v7m8vzxeb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG3G7KoctU"><g class="ft5dv1b6b"><path class="x36h_kb1w"/><circle class="p55tn28js"/><circle class="o1ec32b0j"/><circle class="v7m8vzxeb"/></g></mask></defs><path mask="url(#SVG3G7KoctU)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:more-two"} {...others} />);
}

export default Component;
