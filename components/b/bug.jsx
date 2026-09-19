import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/v/v7o-pz0an.css';
import '../../css/c/cmbdkd3sc.css';
import '../../css/m/mgt2dgbbs.css';
import '../../css/o/oltb880zh.css';
import '../../css/r/rvmpctctq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGK39sAcfc"><g class="ufeehvblu"><path class="v7o-pz0an"/><path class="cmbdkd3sc"/><path class="mgt2dgbbs"/><path class="oltb880zh"/><path class="rvmpctctq"/></g></mask></defs><path mask="url(#SVGK39sAcfc)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:bug"} {...others} />);
}

export default Component;
