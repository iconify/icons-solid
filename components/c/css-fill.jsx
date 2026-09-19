import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/slsyuwjqx.css';
import '../../css/y/yd2zepbyi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="slsyuwjqx"/><path clip-rule="evenodd" class="yd2zepbyi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:css-fill"} {...others} />);
}

export default Component;
