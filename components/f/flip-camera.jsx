import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/t/t58uh_b7n.css';
import '../../css/g/ghea5cbsp.css';
import '../../css/i/igbkoxb2y.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG7fyBHvjX"><g class="aql7dnt-u"><path class="t58uh_b7n"/><circle class="ghea5cbsp"/><path class="igbkoxb2y"/></g></mask></defs><path mask="url(#SVG7fyBHvjX)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:flip-camera"} {...others} />);
}

export default Component;
