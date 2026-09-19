import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/goohnvfrd.css';
import '../../css/z/z8ck8jbnx.css';
import '../../css/l/llok4vb-m.css';
import '../../css/b/bm19tu52u.css';
import '../../css/j/jkay9v9tb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="goohnvfrd"/><path class="z8ck8jbnx"/><path class="llok4vb-m"/><path class="bm19tu52u"/><circle class="jkay9v9tb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:image-file"} {...others} />);
}

export default Component;
