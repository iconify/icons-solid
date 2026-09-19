import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y7ol74bgo.css';
import '../../css/l/lgj4kaccc.css';
import '../../css/b/bvtnug55i.css';
import '../../css/u/u_p-vng4b.css';
import '../../css/n/n92tr7bff.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG4ehpCdsr"><g class="ft5dv1b6b"><path class="y7ol74bgo"/><path class="lgj4kaccc"/><path class="bvtnug55i"/><path class="u_p-vng4b"/><path class="n92tr7bff"/></g></mask></defs><path mask="url(#SVG4ehpCdsr)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:pad"} {...others} />);
}

export default Component;
