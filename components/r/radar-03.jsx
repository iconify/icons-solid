import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mm4eu-bgy.css';
import '../../css/a/akzoi-bci.css';
import '../../css/e/eoh8kjxii.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mm4eu-bgy"/><path class="akzoi-bci"/><path class="eoh8kjxii"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:radar-03"} {...others} />);
}

export default Component;
