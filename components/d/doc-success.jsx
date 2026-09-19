import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/g/g2jmimp0p.css';
import '../../css/g/gt63qzonx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGKyLBZc7Q"><g class="aql7dnt-u"><path class="g2jmimp0p"/><path class="gt63qzonx"/></g></mask></defs><path mask="url(#SVGKyLBZc7Q)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:doc-success"} {...others} />);
}

export default Component;
