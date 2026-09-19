import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/m/mie1pybna.css';
import '../../css/w/wyu1zabwh.css';
import '../../css/v/v5bv_7bmi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGt2xF6gip"><g class="ufeehvblu"><path class="mie1pybna"/><path class="wyu1zabwh"/><path class="v5bv_7bmi"/></g></mask></defs><path mask="url(#SVGt2xF6gip)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:parking"} {...others} />);
}

export default Component;
