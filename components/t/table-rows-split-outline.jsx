import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o0elxlbwx.css';
import '../../css/w/wo598pssi.css';
import '../../css/j/jy3zus3kf.css';
import '../../css/o/ogvdztnfz.css';
import '../../css/i/iu96zrbec.css';
import '../../css/c/c0yhv_8sg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o0elxlbwx"/><path clip-rule="evenodd" class="wo598pssi"/><path class="jy3zus3kf"/><path class="ogvdztnfz"/><path class="iu96zrbec"/><path class="c0yhv_8sg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:table-rows-split-outline"} {...others} />);
}

export default Component;
