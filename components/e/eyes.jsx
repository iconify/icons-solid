import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/l/lftmmacng.css';
import '../../css/k/karz80bzc.css';
import '../../css/a/a3fv3hq-a.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGPcxoUced"><g class="s9cl3zbei"><path clip-rule="evenodd" class="lftmmacng"/><path class="karz80bzc"/><path class="a3fv3hq-a"/></g></mask></defs><path mask="url(#SVGPcxoUced)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:eyes"} {...others} />);
}

export default Component;
