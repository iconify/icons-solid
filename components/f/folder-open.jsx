import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/j/j6n739btm.css';
import '../../css/e/ewljbl57f.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGd7sdteNv"><g class="aql7dnt-u"><path class="j6n739btm"/><path class="ewljbl57f"/></g></mask></defs><path mask="url(#SVGd7sdteNv)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:folder-open"} {...others} />);
}

export default Component;
