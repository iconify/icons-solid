import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/w/wdquz8zei.css';
import '../../css/a/aewvl6b9u.css';
import '../../css/e/e8-dxttjj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGaaefmvJT"><g class="ufeehvblu"><path class="wdquz8zei"/><path class="aewvl6b9u"/><path class="e8-dxttjj"/></g></mask></defs><path mask="url(#SVGaaefmvJT)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:sim"} {...others} />);
}

export default Component;
