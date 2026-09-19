import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/v/v8rhqlbnk.css';
import '../../css/d/d-51ep7ot.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGTPGcnepP"><g class="aql7dnt-u"><path class="v8rhqlbnk"/><path class="d-51ep7ot"/></g></mask></defs><path mask="url(#SVGTPGcnepP)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:diamonds"} {...others} />);
}

export default Component;
