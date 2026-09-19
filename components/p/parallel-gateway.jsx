import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/e/ez330t4ze.css';
import '../../css/l/lqkoj1b-f.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGO3Wn5cUT"><g class="s9cl3zbei"><path class="ez330t4ze"/><path class="lqkoj1b-f"/></g></mask></defs><path mask="url(#SVGO3Wn5cUT)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:parallel-gateway"} {...others} />);
}

export default Component;
