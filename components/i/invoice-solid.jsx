import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eaa4jc92m.css';
import '../../css/g/g2fn-72eb.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="eaa4jc92m"/><path clip-rule="evenodd" class="g2fn-72eb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:invoice-solid"} {...others} />);
}

export default Component;
