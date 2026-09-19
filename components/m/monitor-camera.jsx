import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/l/lg4nic6uw.css';
import '../../css/c/co9te6vwq.css';
import '../../css/q/qmqslstpx.css';
import '../../css/z/z1yv4rbzh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGEjEkhYAJ"><g class="ufeehvblu"><path class="lg4nic6uw"/><path class="co9te6vwq"/><path clip-rule="evenodd" class="qmqslstpx"/><path class="z1yv4rbzh"/></g></mask></defs><path mask="url(#SVGEjEkhYAJ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:monitor-camera"} {...others} />);
}

export default Component;
