import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/de4w5bjhn.css';
import '../../css/h/h6vym3bzz.css';
import '../../css/s/s_j32c9mx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="de4w5bjhn"/><path clip-rule="evenodd" class="h6vym3bzz"/><path clip-rule="evenodd" class="s_j32c9mx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:phone-calling-rounded-outline"} {...others} />);
}

export default Component;
