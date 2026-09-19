import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/n/ndc-l7b8p.css';
import '../../css/p/pic726iix.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGfQiVYcKa"><g class="aql7dnt-u"><path class="ndc-l7b8p"/><path class="pic726iix"/></g></mask></defs><path mask="url(#SVGfQiVYcKa)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:milk"} {...others} />);
}

export default Component;
