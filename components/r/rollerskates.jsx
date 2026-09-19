import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nsfne-b7l.css';
import '../../css/v/v-2nxdbzn.css';
import '../../css/a/a4p4ujbri.css';
import '../../css/r/rxg13fbqg.css';
import '../../css/j/j4g_4_dng.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGoYjg8bbD"><g class="nsfne-b7l"><path class="v-2nxdbzn"/><path class="a4p4ujbri"/><path class="rxg13fbqg"/><path class="j4g_4_dng"/></g></mask></defs><path mask="url(#SVGoYjg8bbD)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:rollerskates"} {...others} />);
}

export default Component;
