import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/f/fz_tw8bkq.css';
import '../../css/a/a9e80-b5o.css';
import '../../css/j/jma92kb0t.css';
import '../../css/v/v4s_j64ti.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGx71C2dpC"><g class="s9cl3zbei"><path class="fz_tw8bkq"/><path class="a9e80-b5o"/><path class="jma92kb0t"/><path class="v4s_j64ti"/></g></mask></defs><path mask="url(#SVGx71C2dpC)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:cooking"} {...others} />);
}

export default Component;
