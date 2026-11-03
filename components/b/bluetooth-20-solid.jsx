import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mfuv_1wwz.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="mfuv_1wwz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:bluetooth-20-solid"} {...others} />);
}

export default Component;
