import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qvt8_wbay.css';
import '../../css/x/xxvlnybzz.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="qvt8_wbay"/><path class="xxvlnybzz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:battery-3-solid"} {...others} />);
}

export default Component;
