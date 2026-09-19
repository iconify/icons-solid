import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/c/cfoowrbmd.css';
import '../../css/k/k6sx21i-s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGeet8hdch"><g class="aql7dnt-u"><path class="cfoowrbmd"/><path class="k6sx21i-s"/></g></mask></defs><path mask="url(#SVGeet8hdch)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:booth"} {...others} />);
}

export default Component;
