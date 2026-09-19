import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/o/o4fdh1b1f.css';
import '../../css/h/h05jvmbea.css';
import '../../css/i/il6_1tbws.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGStGRUdQJ"><g class="aql7dnt-u"><circle class="o4fdh1b1f"/><circle class="h05jvmbea"/><path class="il6_1tbws"/></g></mask></defs><path mask="url(#SVGStGRUdQJ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:glasses"} {...others} />);
}

export default Component;
