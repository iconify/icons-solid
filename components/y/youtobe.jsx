import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/a/awoqex7gd.css';
import '../../css/j/jpajjdo8n.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGiSszmc2E"><g class="s9cl3zbei"><path class="awoqex7gd"/><path class="jpajjdo8n"/></g></mask></defs><path mask="url(#SVGiSszmc2E)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:youtobe"} {...others} />);
}

export default Component;
