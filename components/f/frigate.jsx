import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/p/ppjbcf52z.css';
import '../../css/s/s6kk7juwe.css';
import '../../css/s/scyn38bvf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGyounqbOn"><g class="aql7dnt-u"><path class="ppjbcf52z"/><path class="s6kk7juwe"/><path class="scyn38bvf"/></g></mask></defs><path mask="url(#SVGyounqbOn)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:frigate"} {...others} />);
}

export default Component;
