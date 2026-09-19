import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/j/jmbehwz-g.css';
import '../../css/d/de0sabcdg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGhty1LeUl"><g class="aql7dnt-u"><path class="jmbehwz-g"/><path class="de0sabcdg"/></g></mask></defs><path mask="url(#SVGhty1LeUl)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:water-no"} {...others} />);
}

export default Component;
