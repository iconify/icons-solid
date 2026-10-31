import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iqsohmzgt.css';
import '../../css/p/pb4gmv60s.css';
import '../../css/m/millydbar.css';
import '../../css/h/hdqko0boa.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="iqsohmzgt"/><path class="pb4gmv60s"/><path class="millydbar"/><path class="hdqko0boa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:rosemary"} {...others} />);
}

export default Component;
