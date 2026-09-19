import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u4l3bjbzx.css';
import '../../css/l/lm9drlb8p.css';
import '../../css/x/x90aacx1k.css';
import '../../css/g/g3no8bb0z.css';
import '../../css/h/ht4c2rboc.css';
import '../../css/e/e5gsqbc3q.css';
import '../../css/g/grnz6_bjq.css';
import '../../css/z/zsnq2bjkz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="u4l3bjbzx"/><path class="lm9drlb8p"/><path class="x90aacx1k"/><path class="g3no8bb0z"/><path class="ht4c2rboc"/><path class="e5gsqbc3q"/><path class="grnz6_bjq"/><path class="zsnq2bjkz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:close-up-mode"} {...others} />);
}

export default Component;
