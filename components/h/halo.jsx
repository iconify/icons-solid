import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/x/x63nguxqu.css';
import '../../css/n/n0ibv68fm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGOjvKccoL"><g class="aql7dnt-u"><path class="x63nguxqu"/><path class="n0ibv68fm"/></g></mask></defs><path mask="url(#SVGOjvKccoL)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:halo"} {...others} />);
}

export default Component;
