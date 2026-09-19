import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/m/m3rbq0wjz.css';
import '../../css/o/ozv-chpao.css';
import '../../css/q/qni72ecbz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG2ykNtbBm"><g class="aql7dnt-u"><path class="m3rbq0wjz"/><path class="ozv-chpao"/><path class="qni72ecbz"/></g></mask></defs><path mask="url(#SVG2ykNtbBm)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:file-lock-one"} {...others} />);
}

export default Component;
