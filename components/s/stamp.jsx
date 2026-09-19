import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/adexpl72i.css';
import '../../css/i/i--o-zb7z.css';
import '../../css/f/f6c0wnbzz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG0gbQfepc"><g class="adexpl72i"><path class="i--o-zb7z"/><circle class="f6c0wnbzz"/></g></mask></defs><path mask="url(#SVG0gbQfepc)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:stamp"} {...others} />);
}

export default Component;
