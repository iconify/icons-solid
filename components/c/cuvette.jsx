import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/e/e_bqi703z.css';
import '../../css/r/r8r179s3m.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGPja92c8y"><g class="aql7dnt-u"><path clip-rule="evenodd" class="e_bqi703z"/><path class="r8r179s3m"/></g></mask></defs><path mask="url(#SVGPja92c8y)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:cuvette"} {...others} />);
}

export default Component;
