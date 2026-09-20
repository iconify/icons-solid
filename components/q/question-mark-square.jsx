import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/i/ina_babpj.css';
import '../../css/k/k1vkz0b3o.css';
import '../../css/z/z7h9dmbpz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="ina_babpj"/><path class="k1vkz0b3o"/><rect class="z7h9dmbpz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:question-mark-square"} {...others} />);
}

export default Component;
