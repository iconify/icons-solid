import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/j/j2y70bssr.css';
import '../../css/z/zfouoybeb.css';
import '../../css/c/c8tjlaclr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGe7ggsQXr"><g class="aql7dnt-u"><path class="j2y70bssr"/><path class="zfouoybeb"/><path class="c8tjlaclr"/></g></mask></defs><path mask="url(#SVGe7ggsQXr)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:lotion"} {...others} />);
}

export default Component;
