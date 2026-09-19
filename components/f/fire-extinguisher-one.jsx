import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/o/oel34lrcl.css';
import '../../css/l/l4y1h7b8q.css';
import '../../css/q/qug4cqf0k.css';
import '../../css/z/z_ar8h2tr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGpXjuwbUV"><g class="ufeehvblu"><path class="oel34lrcl"/><path class="l4y1h7b8q"/><path class="qug4cqf0k"/><path class="z_ar8h2tr"/></g></mask></defs><path mask="url(#SVGpXjuwbUV)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:fire-extinguisher-one"} {...others} />);
}

export default Component;
