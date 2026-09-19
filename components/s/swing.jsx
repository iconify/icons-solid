import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/z/z6zqwox-c.css';
import '../../css/d/dfuqjjkyx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG3dTQs9Rq"><g class="aql7dnt-u"><path class="z6zqwox-c"/><path class="dfuqjjkyx"/></g></mask></defs><path mask="url(#SVG3dTQs9Rq)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:swing"} {...others} />);
}

export default Component;
