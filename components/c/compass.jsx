import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/b/baen2yhxr.css';
import '../../css/g/g54p95bma.css';
import '../../css/n/neptv8bgx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGtEp7Ce7g"><g class="aql7dnt-u"><path class="baen2yhxr"/><circle class="g54p95bma"/><path class="neptv8bgx"/></g></mask></defs><path mask="url(#SVGtEp7Ce7g)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:compass"} {...others} />);
}

export default Component;
