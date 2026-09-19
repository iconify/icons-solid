import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e73n2wbci.css';
import '../../css/t/ts2ygdnsu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e73n2wbci"/><path class="ts2ygdnsu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:return-up-forward-sharp"} {...others} />);
}

export default Component;
