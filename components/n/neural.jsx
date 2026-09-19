import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/y/yhb1cqbqy.css';
import '../../css/c/c89k9zb1v.css';
import '../../css/d/d-bufxb7a.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGfJxM3bcw"><g class="rohhhzb0l"><path clip-rule="evenodd" class="yhb1cqbqy"/><path class="c89k9zb1v"/><path class="d-bufxb7a"/></g></mask></defs><path mask="url(#SVGfJxM3bcw)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:neural"} {...others} />);
}

export default Component;
