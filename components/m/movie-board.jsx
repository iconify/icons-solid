import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/r/rxsogubeb.css';
import '../../css/p/psjy2mb5h.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGUhGFRcfJ"><g class="aql7dnt-u"><path class="rxsogubeb"/><path class="psjy2mb5h"/></g></mask></defs><path mask="url(#SVGUhGFRcfJ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:movie-board"} {...others} />);
}

export default Component;
