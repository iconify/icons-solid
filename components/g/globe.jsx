import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/d/dkbc58bxi.css';
import '../../css/o/or039z06o.css';
import '../../css/h/h3zgu7-gy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGpKjpocWi"><g class="aql7dnt-u"><path class="dkbc58bxi"/><path clip-rule="evenodd" class="or039z06o"/><path class="h3zgu7-gy"/></g></mask></defs><path mask="url(#SVGpKjpocWi)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:globe"} {...others} />);
}

export default Component;
