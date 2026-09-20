import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/tw0t82bkw.css';
import '../../css/s/s416hsbyv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="tw0t82bkw"/><path class="s416hsbyv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:microphone"} {...others} />);
}

export default Component;
