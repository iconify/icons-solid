import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/r/r2tfubbpc.css';
import '../../css/h/hq7te623q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGHklQqbjU"><g class="aql7dnt-u"><path class="r2tfubbpc"/><path class="hq7te623q"/></g></mask></defs><path mask="url(#SVGHklQqbjU)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:piano"} {...others} />);
}

export default Component;
