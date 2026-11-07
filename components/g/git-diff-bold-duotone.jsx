import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/l/lv7o27lha.css';
import '../../css/n/n7pyn85wa.css';
import '../../css/p/p03812bxn.css';
import '../../css/m/mnelrmb_n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="lv7o27lha"/><path class="n7pyn85wa"/></g><path clip-rule="evenodd" class="p03812bxn"/><path clip-rule="evenodd" class="mnelrmb_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:git-diff-bold-duotone"} {...others} />);
}

export default Component;
