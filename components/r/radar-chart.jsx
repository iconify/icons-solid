import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/w/wvdu4-vmy.css';
import '../../css/h/hny_tqt2a.css';
import '../../css/h/h6jcxqydj.css';
import '../../css/k/k6zktqb0a.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGCaLLJb2l"><g class="ufeehvblu"><path class="wvdu4-vmy"/><path class="hny_tqt2a"/><path class="h6jcxqydj"/><path class="k6zktqb0a"/></g></mask></defs><path mask="url(#SVGCaLLJb2l)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:radar-chart"} {...others} />);
}

export default Component;
