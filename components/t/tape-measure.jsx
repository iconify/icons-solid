import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/t/tkhjv918g.css';
import '../../css/x/x6ii8xbvp.css';
import '../../css/u/uazjk4bqd.css';
import '../../css/g/ge0jrlzsw.css';
import '../../css/x/xqkcxlb-z.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG2etO5cpj"><g class="s9cl3zbei"><path class="tkhjv918g"/><path class="x6ii8xbvp"/><circle class="uazjk4bqd"/><path class="ge0jrlzsw"/><path class="xqkcxlb-z"/></g></mask></defs><path mask="url(#SVG2etO5cpj)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:tape-measure"} {...others} />);
}

export default Component;
