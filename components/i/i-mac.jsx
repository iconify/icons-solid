import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y-o-afjna.css';
import '../../css/f/f5enjebpt.css';
import '../../css/o/og-ro-b0e.css';
import '../../css/w/wzr2pst3a.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGy4NrPdFv"><g class="ft5dv1b6b"><path class="y-o-afjna"/><path class="f5enjebpt"/><path class="og-ro-b0e"/><path class="wzr2pst3a"/></g></mask></defs><path mask="url(#SVGy4NrPdFv)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:i-mac"} {...others} />);
}

export default Component;
