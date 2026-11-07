import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/x/xp2wd6b7o.css';
import '../../css/t/ti79v0bxi.css';
import '../../css/h/hqsxmzcag.css';
import '../../css/a/afqh91xni.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="xp2wd6b7o"/><path class="ti79v0bxi"/></g><path class="hqsxmzcag"/><path class="afqh91xni"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chevrons-down-up-bold-duotone"} {...others} />);
}

export default Component;
