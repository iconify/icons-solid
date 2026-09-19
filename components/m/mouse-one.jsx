import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/u/uvh5rrbvb.css';
import '../../css/s/s-1nnbcne.css';
import '../../css/s/sjya5bbyx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG3YtBhbYq"><g class="rohhhzb0l"><rect class="uvh5rrbvb"/><path class="s-1nnbcne"/><path class="sjya5bbyx"/></g></mask></defs><path mask="url(#SVG3YtBhbYq)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:mouse-one"} {...others} />);
}

export default Component;
