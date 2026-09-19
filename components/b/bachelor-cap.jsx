import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/j/jb6j1ybag.css';
import '../../css/b/bk3dgpqfa.css';
import '../../css/b/beqh6w3vf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGpd6gNcbI"><g class="aql7dnt-u"><path class="jb6j1ybag"/><path class="bk3dgpqfa"/><path class="beqh6w3vf"/></g></mask></defs><path mask="url(#SVGpd6gNcbI)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:bachelor-cap"} {...others} />);
}

export default Component;
