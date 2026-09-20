import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rpfg3lbzb.css';
import '../../css/g/g26fkqble.css';
import '../../css/p/px4i0s1qf.css';
import '../../css/l/lk2oa9bac.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rpfg3lbzb"/><path class="g26fkqble"/><path class="px4i0s1qf"/><circle class="lk2oa9bac"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:image-gallery-rtl"} {...others} />);
}

export default Component;
