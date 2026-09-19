import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/g/g339p6i6x.css';
import '../../css/e/eisg8_b5u.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGeRwz2bVG"><g class="aql7dnt-u"><path class="g339p6i6x"/><path class="eisg8_b5u"/></g></mask></defs><path mask="url(#SVGeRwz2bVG)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:sd"} {...others} />);
}

export default Component;
