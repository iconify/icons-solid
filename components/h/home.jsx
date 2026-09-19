import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qobvjnbgt.css';
import '../../css/b/bslnj-b8x.css';
import '../../css/b/bo2l3sb1w.css';
import '../../css/z/zro-8opor.css';
import '../../css/r/rmk9j6bjs.css';
import '../../css/c/cyz7hxbva.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qobvjnbgt"/><path class="bslnj-b8x"/><path class="bo2l3sb1w"/><path class="zro-8opor"/><path class="rmk9j6bjs"/><path class="cyz7hxbva"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:home"} {...others} />);
}

export default Component;
