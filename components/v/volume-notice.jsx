import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/x/xpr8lkjuj.css';
import '../../css/y/yqxucbc0n.css';
import '../../css/m/m4wir9t-b.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG2c9QNd4P"><g class="rohhhzb0l"><path class="xpr8lkjuj"/><path class="yqxucbc0n"/><path class="m4wir9t-b"/></g></mask></defs><path mask="url(#SVG2c9QNd4P)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:volume-notice"} {...others} />);
}

export default Component;
