import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kucvonbff.css';
import '../../css/b/bwxwxu62q.css';
import '../../css/l/l-o0nybcd.css';
import '../../css/f/fqvsswb6x.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGV7PGtcWW"><g class="ft5dv1b6b"><path class="kucvonbff"/><path class="bwxwxu62q"/><path class="l-o0nybcd"/><path class="fqvsswb6x"/></g></mask></defs><path mask="url(#SVGV7PGtcWW)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:focus-one"} {...others} />);
}

export default Component;
