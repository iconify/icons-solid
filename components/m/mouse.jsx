import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/i/ir0k51bkp.css';
import '../../css/d/du-vibcig.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGp6iL6bft"><g class="aql7dnt-u"><path clip-rule="evenodd" class="ir0k51bkp"/><path class="du-vibcig"/></g></mask></defs><path mask="url(#SVGp6iL6bft)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:mouse"} {...others} />);
}

export default Component;
