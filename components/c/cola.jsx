import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/j/jlnr15bxu.css';
import '../../css/i/i5-ng-btb.css';
import '../../css/t/tbfk-_6ot.css';
import '../../css/l/l-90x2_qh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGps2vrDJY"><g class="s9cl3zbei"><path class="jlnr15bxu"/><path class="i5-ng-btb"/><path class="tbfk-_6ot"/><path class="l-90x2_qh"/></g></mask></defs><path mask="url(#SVGps2vrDJY)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:cola"} {...others} />);
}

export default Component;
