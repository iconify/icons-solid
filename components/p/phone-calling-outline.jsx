import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o0fbn4bvv.css';
import '../../css/e/ep7a_f12q.css';
import '../../css/z/zii2occby.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="o0fbn4bvv"/><path class="ep7a_f12q"/><path class="zii2occby"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:phone-calling-outline"} {...others} />);
}

export default Component;
