import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/r/rtwj0brya.css';
import '../../css/u/umq8qcomr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGMCtwEc4r"><g class="aql7dnt-u"><path class="rtwj0brya"/><path class="umq8qcomr"/></g></mask></defs><path mask="url(#SVGMCtwEc4r)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:six-circular-connection"} {...others} />);
}

export default Component;
