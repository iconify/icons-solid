import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/g/gnvb1abbz.css';
import '../../css/n/nks455yhk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGpyqN7bYr"><g class="aql7dnt-u"><path class="gnvb1abbz"/><path class="nks455yhk"/></g></mask></defs><path mask="url(#SVGpyqN7bYr)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:descend"} {...others} />);
}

export default Component;
