import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/e/e6x_babbs.css';
import '../../css/i/iiwvrybnk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGvo2rAduP"><g class="aql7dnt-u"><path class="e6x_babbs"/><path class="iiwvrybnk"/></g></mask></defs><path mask="url(#SVGvo2rAduP)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:magnet"} {...others} />);
}

export default Component;
