import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jclmzmbsl.css';
import '../../css/z/z2fgy-3re.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jclmzmbsl"/><path class="z2fgy-3re"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:calculator"} {...others} />);
}

export default Component;
