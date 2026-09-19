import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/b/b8jxfhb0t.css';
import '../../css/k/k-eaexmhb.css';
import '../../css/n/nxtfqrbmx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGNrGRWdta"><g class="ufeehvblu"><path class="b8jxfhb0t"/><path class="k-eaexmhb"/><path class="nxtfqrbmx"/></g></mask></defs><path mask="url(#SVGNrGRWdta)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:eyebrow"} {...others} />);
}

export default Component;
