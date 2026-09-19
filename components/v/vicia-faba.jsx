import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/s/sdoteibvg.css';
import '../../css/m/mcdf-5f6l.css';
import '../../css/b/b1f263bkh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGvzxhLcCT"><g class="ufeehvblu"><path class="sdoteibvg"/><path class="mcdf-5f6l"/><path class="b1f263bkh"/></g></mask></defs><path mask="url(#SVGvzxhLcCT)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:vicia-faba"} {...others} />);
}

export default Component;
