import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/c/c-vzr4ndx.css';
import '../../css/o/ou5il-_la.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGYfIswQmF"><g class="aql7dnt-u"><path class="c-vzr4ndx"/><path class="ou5il-_la"/></g></mask></defs><path mask="url(#SVGYfIswQmF)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:fruiter"} {...others} />);
}

export default Component;
