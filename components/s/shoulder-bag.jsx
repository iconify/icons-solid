import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/t/tn_s-dbef.css';
import '../../css/s/sdia6zb7q.css';
import '../../css/q/qjj7xz7uz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGFND0weWo"><g class="s9cl3zbei"><path class="tn_s-dbef"/><path class="sdia6zb7q"/><circle class="qjj7xz7uz"/></g></mask></defs><path mask="url(#SVGFND0weWo)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:shoulder-bag"} {...others} />);
}

export default Component;
